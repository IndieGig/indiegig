import { getProviders, signIn } from "next-auth/react";

export default async function Page() {
  const providers = await getProviders();

  if (!providers) {
    return <div>No providers found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button type="button">Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}
