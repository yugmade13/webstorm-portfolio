export default function Home() {
  return (
    <section className="p-4 min-w-[334px]">
      <div className="font-mono text-base text-gray12">
        <div className="min-h-[calc(100vh-38px-39px-34px-32px-104px)] flex flex-col justify-center gap-y-20">
          <div className="flex flex-col gap-y-3">
            <span className="text-lg text-gray7">Hai Saya</span>
            <h1 className="text-5xl md:text-6xl">
              Yugma Dewangga
            </h1>
            <span className="text-xl lg:text-3xl text-gray7">{'> Web Developer'}</span>
          </div>
          <div className="flex flex-col gap-y-4 text-sm lg:text-base">
            <p className="text-gray7">{'// anda dapat melihat proyek github saya disini'}</p>
            <p>
              <span className="text-purple-primary">{'const '}</span>
              <span>{'githubLink'}</span>
              <span>{' = '}</span>
              <span className="text-green-primary break-words">“https://github.com/yugmade13”;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
