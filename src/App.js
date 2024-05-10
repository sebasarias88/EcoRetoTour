import "./index.css";

function App() {
  return (
    <div className="App text-white">
      <div className='p-10'>
        <div className="text-center text-5xl font-semibold">
        Eco Reto Tour 
        </div>
        <div className="mt-10 xl:w-1/2 lg:w-3/4 md:w-4/5 sm:w-full">

          <div className="font-semibold text-2xl">
          Trekking (Guías turísticos)
          </div>
          <div className=" overflow-ellipsis">
          El Trekking, básicamente es una actividad cuyo objetivo consiste en vivir y disfrutar una experiencia única con el entorno cultural, mediante la realización de caminatas o recorridos a pie, por diferentes senderos, caminos o rutas. 
          </div>

          <div className="font-semibold text-2xl mt-12">
          Avistamiento de aves
          </div>
          <div>
          El Trekking o el senderismo es una gran oportunidad para quienes aman apreciar la belleza de las aves, acceder por diferentes caminos, rutas o senderos relacionados a destinos montañosos, selváticos, etc. Nos permite observar y contemplar los diferentes tipos de especies que estas nos ofrecen.
          </div>

          <div className="font-semibold text-2xl mt-12">
          Campamentos
          </div>
          <div>
          Acampar es una actividad que se puede llevar a cabo dentro del desarrollo del Trekking en opción de recorridos largos. Generalmente los campamentos, son una parte fundamental y atractiva para los participantes de las travesías.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
