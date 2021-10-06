export const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              Acceptez les paiements en Franc CFA numérique où que vous soyez dans le monde
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 md:text-lg">
            Si chaque entreprise est unique, toutes ont besoin d'être payées. Installé en un clin d'œil, Swootte est facile à utiliser. Il vous permet d'effectuer des paiements sans contact partout et à tout moment. Profitez de paiements sécurisés tout au long de la journée dans un boîtier élégant..
            </p>
          </div>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Paiements rapides</h6>
            <p className="mb-3 text-sm text-gray-900">
              Grâce aux réseaux Solana, nous pouvons traiter jusqu'à 60 000 transactions par seconde. Cela fait de nous la solution la plus rapide du marché.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Une comptabilité plus facile</h6>
            <p className="mb-3 text-sm text-gray-900">
              Intégrez votre logiciel de comptabilité en un clin d'œil pour automatiser le suivi de tous vos paiements.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Une protection infaillible</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lorsque vous utilisez la plateforme de paiement sécurisé Swootte, vos données sont protégées par les normes de sécurité les plus élevées.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
</svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Des frais transparents</h6>
            <p className="mb-3 text-sm text-gray-900">
              Payez des frais de transaction de 0,5 %. Pas de frais fixes. Pas d'abonnement ni d'engagement. Nous aimons garder les choses simples !
            </p>
          </div>
        </div>
      </div>
    );
  };