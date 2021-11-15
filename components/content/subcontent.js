export const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Organisez vos produits et suivez vos ventes
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Notre application de caisse transforme votre smartphone ou votre tablette en une caisse enregistreuse complète, vous permettant d'encaisser des paiements en Franc CFA. Organisez vos produits, suivez les niveaux d'inventaire et restez au courant des ventes grâce au stockage sécurisé de toutes vos données dans l'application.              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
</svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Off ramp / On ramp.
                </h6>
                <p className="text-sm text-gray-900">
                  L'argent que vous gagnez peut être déposé sur votre compte bancaire traditionnel en un ou deux jours ouvrables.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                Rapports d'activité
                </h6>
                <p className="text-sm text-gray-900">
                  Bénéficiez de rapports d'activité clairs et accessibles en temps réel sur vos ventes et l'activité de votre personnel.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 shadow-lg sm:h-96"
              src="images/capture_pour_home.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };