import { type Table, getTableColumns } from "drizzle-orm";

export const columnSelector = <T extends Table>(table: T) => {
	type AllColumns = T["_"]["columns"];

	type ColumnSelector<C extends AllColumns> = {
		select: <K extends keyof C>(...columns: K[]) => ColumnSelector<Pick<C, K>>;
		omit: <K extends keyof C>(...columns: K[]) => ColumnSelector<Omit<C, K>>;
		columns: C;
	};

	const createColumnSelector = <C extends AllColumns>(
		currentColumns: C,
	): ColumnSelector<C> => ({
		select: <K extends keyof C>(...columns: K[]) =>
			createColumnSelector(
				Object.fromEntries(
					Object.entries(currentColumns).filter(([key]) =>
						columns.includes(key as K),
					),
				) as Pick<C, K>,
			),
		omit: <K extends keyof C>(...columns: K[]) =>
			createColumnSelector(
				Object.fromEntries(
					Object.entries(currentColumns).filter(
						([key]) => !columns.includes(key as K),
					),
				) as Omit<C, K>,
			),
		columns: currentColumns,
	});

	return createColumnSelector(getTableColumns(table));
};
