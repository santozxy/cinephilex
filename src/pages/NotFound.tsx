
export function NotFound() {
    return (
      <>
        <div className="flex flex-col  justify-center items-center h-screen bg-background dark:bg-dark">
          <div className="flex flex-col gap-4 justify-center items-center shadow-xl p-14  rounded-lg border-[#eaeaea] ">
            <h1 className="font-extralight w-full text-center pb-2 text-primary text-9xl border-b dark:border-gray-500">
              404
            </h1>
            <h1 className="text-4xl font-extralight text-primary">
              Página não encontrada
            </h1>
          </div>
        </div>
      </>
    );
  }