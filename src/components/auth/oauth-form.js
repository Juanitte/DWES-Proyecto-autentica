import { loginGoogle, loginGithub, loginDiscord } from "@/lib/actions"

function OauthForm({ className, error }) {

  return (
    <form className={className}>
      <h1 className="text-3xl font-bold mb-4">Iniciar sesión OAuth</h1>

      <div className='flex flex-col gap-1'>
        <button formAction={loginGoogle}
          className="flex gap-6 items-center px-8 py-4 rounded-md bg-slate-600 font-bold hover:bg-red-500">
          <img src="/images/google.svg" alt="Google" className="p-2 bg-white rounded-full" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub}
          className="flex gap-6 items-center px-8 py-4 rounded-md bg-slate-600 font-bold hover:bg-red-500">
          <img src="/images/github.svg" alt="Github" className="p-2 bg-white rounded-full" /> Iniciar sesión con Github
        </button>

        <button formAction={loginDiscord}
          className="flex gap-6 items-center px-8 py-4 rounded-md bg-slate-600 font-bold hover:bg-red-500">
          <img src="/images/discord.svg" alt="Discord" className="p-2 bg-white rounded-full" /> Iniciar sesión con Discord
        </button>
        {error}
      </div>
    </form>
  )
}

export default OauthForm
