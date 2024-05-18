import { useState } from "react";
import "./index.css";

function App() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  return (
    <div className="App text-white">
      <div className="p-10">
        <div className="flex justify-between w-3/5">
          <img className="w-20 h-20 rounded-full" src="image7.jpeg" />
          <div className="text-5xl font-semibold">Eco Reto Tour</div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-black/40 p-3 rounded-xl">
            <div className="font-semibold text-2xl text-center">
              Trekking (Guías turísticos)
            </div>
            <div className="text-justify text-sm p-2">
              El Trekking, básicamente es una actividad cuyo objetivo consiste
              en vivir y disfrutar una experiencia única con el entorno
              cultural, mediante la realización de caminatas o recorridos a pie,
              por diferentes senderos, caminos o rutas.
            </div>
          </div>

          <div className="bg-black/40 p-3 rounded-xl">
            <div className="font-semibold text-2xl text-center">
              Avistamiento de aves
            </div>
            <div className="text-justify text-sm p-2">
              El Trekking o el senderismo es una gran oportunidad para quienes
              aman apreciar la belleza de las aves, acceder por diferentes
              caminos, rutas o senderos relacionados a destinos montañosos,
              selváticos, etc. Nos permite observar y contemplar los diferentes
              tipos de especies que estas nos ofrecen.
            </div>
          </div>

          <div className="bg-black/40 p-3 rounded-xl">
            <div className="font-semibold text-2xl text-center">
              Campamentos
            </div>
            <div className="text-justify text-sm p-2">
              Acampar es una actividad que se puede llevar a cabo dentro del
              desarrollo del Trekking en opción de recorridos largos.
              Generalmente los campamentos, son una parte fundamental y
              atractiva para los participantes de las travesías.
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="w-full bg-black/40 p-5 rounded-lg h-auto overflow-hidden">
              <div className="font-semibold text-lg flex justify-center">
                Parque Nacional Natural de los Nevados
              </div>

              <img
                className="p-6 mt-4 cursor-pointer object-contain"
                src="ParqueNacionalNevado.png"
                onClick={() => setImage1(!image1)}
              />

              {image1 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    El Parque Nacional Natural Los Nevados se localiza en el
                    corazón del Eje Cafetero, en el complejo volcánico norte
                    conformado por el volcán Nevado del Ruíz, cráteres La Olleta
                    y La Piraña, el volcán Nevado de Santa Isabel, el volcán
                    Nevado del Tolima, y los Paramillos del Cisne, Santa Rosa y
                    Quindío.
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking</div>
                      <div>• Avistamiento de aves</div>
                      <div>• Fauna y flora</div>
                      <div>• Educacion ambiental</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Buena hidratación.</div>
                      <div>• Ropa y calzado comodo.</div>
                      <div>• Ritmo lento.</div>
                      <div>• Protector solar.</div>
                      <div>• Gafas de sol con protector UV,</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Colombianos y miembros de la CAN hasta los 25 años:
                      $90.000 COP Colombianos y miembros de la CAN despues de
                      los 25 años: $105.000 COP Extranjeros: $150.000 Grupos de
                      10 personas.
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>• Entrada al parque.</div>
                      <div>• Seguro de rescate.</div>
                      <div>• Guia profesional.</div>
                      <div>
                        {" "}
                        • Transporte terrestre al parque (ida y vuelta).
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="w-full bg-black/40 p-5 rounded-lg">
              <div className="font-semibold text-lg flex justify-center">
                Cascadas de Santa Rita
              </div>
              <img
                className="p-6 cursor-pointer object-contain"
                src="cascadas.png"
                onClick={() => setImage2(!image2)}
              />

              {image2 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    Las cascadas de Santa Rita se encuentran ubicadas en el
                    municipio de Salento, Quindío mas exactamente en la vereda
                    Boquia, allí se podemos encontrar la finca Santa Rita donde
                    inicia un maravilloso recorrido ecoturistico y disfrutar de
                    diferentes actividades.
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking.</div>
                      <div>• Fauna y flora.</div>
                      <div>• Camping.</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Hidratación.</div>
                      <div>• Bloqueador.</div>
                      <div>• Ropa comoda.</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Colombianos y extranjeros: $50.000 COP
                      <br />
                      Grupos de 10 personas.
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>• Entrada a la finca Santa Rita.</div>
                      <div>• Seguro de rescate.</div>
                      <div>• Guia profesional.</div>
                      <div>
                        • Transporte terrestre a la finca Santa Rita (ida y
                        vuelta).
                      </div>
                      <div>
                        {" "}
                        • Transporte terrestre al parque (ida y vuelta).
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="w-full bg-black/40 p-5 rounded-lg">
              <div className="font-semibold text-lg flex justify-center">
                Valle del Cocora
              </div>
              <img
                className="p-6 cursor-pointer"
                src="cocora.png"
                onClick={() => setImage3(!image3)}
              />

              {image3 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    En la cordillera central podemos encontrar el paisaje
                    natural Valle de Cocora, ubicaod mas especificamente en el
                    municipio de Salento Quindío, donde puedes experiencias
                    inolvidables y sobretodo ecologicas.
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking.</div>
                      <div>• Avistamiento de aves.</div>
                      <div>• Fauna y flora.</div>
                      <div>• • Camping.</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Ropa comoda adecuada.</div>
                      <div>• Bloqueador solar.</div>
                      <div>• Hidratación.</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Colombianos y extranjeros: $90.000 COP
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>
                        • Entrada al Valle del Cocora, Finca la Montaña, Casa de
                        los Colibríes.
                      </div>
                      <div>• Seguro de rescate.</div>
                      <div>• Guia profesional.</div>
                      <div>
                        • Transporte terrestre al Valle del Cocora (ida y
                        vuelta).
                      </div>
                      <div>
                        {" "}
                        • Transporte terrestre al parque (ida y vuelta).
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="w-full bg-black/40 p-5 rounded-lg">
              <div className="font-semibold text-lg flex justify-center">
                Reserva natural Barbas Bremen
              </div>
              <img
                className="p-6 cursor-pointer"
                src="reservaBarbas.png"
                onClick={() => setImage4(!image4)}
              />

              {image4 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    La reserba natural se encuentra ubicada entre los municipios
                    de Filandia, Circasia y Salento en el departamento del
                    Quindío, es un area protegida en la que se encuentra gran
                    variedad de riquezas naturales para disfrutar en este
                    recorrido.
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking.</div>
                      <div>• Avistamiento de aves.</div>
                      <div>• Fauna.</div>
                      <div>• Avistamiento de monos aulladores.</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Botas pantaneras.</div>
                      <div>• Ropa comoda.</div>
                      <div>• Hidratacion.</div>
                      <div>• Gorra.</div>
                      <div>• Bloqueador.</div>
                      <div>• Repelente.</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Colombianos y extranjeros: $95.000 COP
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>• Entrada a la Reserva</div>
                      <div>• Seguro de rescate.</div>
                      <div>• Guia profesional.</div>
                      <div>
                        • Transporte terrestre a Reserva (ida y vuelta).
                      </div>
                      <div>
                        {" "}
                        • Transporte terrestre al parque (ida y vuelta).
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/*costarica*/}
            <div className="w-full bg-black/40 p-5 rounded-lg">
              <div className="font-semibold text-lg flex justify-center">
                Parque Nacional Tortuguero
              </div>
              <img
                className="p-6 cursor-pointer"
                src="ParqueNacionalTortuguero.png"
                onClick={() => setImage5(!image5)}
              />

              {image5 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    El Parque Nacional Tortuguero (PNT) esta ubicado al noreste
                    de Costa Rica y es uno de los principales iconos turísticos
                    de dicho país ya que es reconocido internacionalmente por
                    proteger la playa de anidación de tortugas verdes más
                    importante en el hemisferio occidental. Protege playas para
                    el desove de 4 especies de tortugas marinas: Verde, Baula,
                    Carey, Cabezona, además protege importantes especies en
                    peligro de extinción, el hábitat del manatí (Trichechus
                    manatus), que es uno de los mamíferos más escasos y
                    amenazados de Costa Rica, entre otros. (sinac, 2024)
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking.</div>
                      <div>• Fauna y flora.</div>
                      <div>• Observación de tortugas marinas.</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Ropa comoda adecuada.</div>
                      <div>• Bloqueador solar.</div>
                      <div>• Hidratación.</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Residente: ₡52.750 Colones = 400.000 COP Extranjero:
                      $128.50 USD = 500.000 COP
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>
                        • Alojamiento Hotel Laguna Lodge (dos dias y una noche)
                        Desayuno incluido.
                      </div>
                      <div>• Transporte hotel a PNT ida y vuelta.</div>
                      <div>• Entrada al parque.</div>
                      <div>• Almuerzo y comida.</div>
                      <div>• Guia profesional.</div>
                      <div>• Seguro de rescate.</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="w-full bg-black/40 p-5 rounded-lg">
              <div className="font-semibold text-lg flex justify-center">
                Parque Nacional Braulio Carrillo
              </div>
              <img
                className="p-6 cursor-pointer"
                src="Braulio.png"
                onClick={() => setImage6(!image6)}
              />

              {image6 ? (
                <div className="text-sm text-justify">
                  <div className="mt-6">
                    El Parque Nacional Natural Los Nevados se localiza en el
                    corazón del Eje Cafetero, en el complejo volcánico norte
                    conformado por el volcán Nevado del Ruíz, cráteres La Olleta
                    y La Piraña, el volcán Nevado de Santa Isabel, el volcán
                    Nevado del Tolima, y los Paramillos del Cisne, Santa Rosa y
                    Quindío.
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <p className="font-bold">Actividades:</p>
                    <div className="px-2">
                      <div>• Trekking.</div>
                      <div>• Fauna y flora.</div>
                      <div>• Camping.</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Recomendaciones:</p>
                    <div className="px-2">
                      <div>• Ropa comoda adecuada.</div>
                      <div>• Bloqueador solar.</div>
                      <div>• Hidratación.</div>
                      <div>• No arrojar basuras.</div>
                      <div>• No aislarse del grupo.</div>
                      <div>• Respeetar la vida silvestre.</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Precio:</p>
                    <div className="px-2">
                      Residente: ₡56.700 Colones = 430.000 COP Extranjero:
                      $143.90 USD = 560.000 COP
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold">Incluye:</p>
                    <div className="px-2">
                      <div>
                        • Alojamiento Hotel Hacienda la Isla (dos dias y una
                        noche) Desayuno incluido.
                      </div>
                      <div>
                        • Transporte hotel a PN Braulio Carrillo ida y vuelta.
                      </div>
                      <div>• Entrada al parque.</div>
                      <div>• Almuerzo y comida.</div>
                      <div>• Guia profesional.</div>
                      <div>• Seguro de rescate.</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-2xl font-bold text-center">ALIADOS</div>
          <div className="flex justify-around gap-4 mt-8">
            <div className="w-40 h-20">
              <img className="rounded-lg object-contain" src="image1.jpeg" />
            </div>

            <div className="w-40 h-20">
              <img className="rounded-lg object-contain" src="image2.jpeg" />
            </div>

            <div className="w-40 h-20">
              <img className="rounded-lg object-contain" src="image3.jpeg" />
            </div>

            <div className="w-40 h-20">
              <img className="rounded-lg object-contain" src="image4.jpeg" />
            </div>

            <div className="w-40 h-20">
              <img className="rounded-lg object-contain" src="image5.jpeg" />
            </div>

            <div className="w-44 h-48">
              <img className="rounded-lg object-contain" src="image6.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
