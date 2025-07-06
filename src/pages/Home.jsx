// index.tsx — Page d’accueil SmartAbonnement avec témoignages, contact élargi et appel comparateur
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Comparez. Économisez. Profitez.
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Votre comparateur télécom en Belgique. Proximus, Orange, Scarlet et bien plus.
        </p>

        <Button size="lg" className="text-lg px-6 py-3 bg-white text-blue-700 hover:bg-blue-50">
          Démarrer
        </Button>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Pourquoi SmartAbonnement ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Des économies garanties</h3>
            <p>Jusqu'à 350€/an économisés en changeant de fournisseur télécom.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Analyse ultra personnalisée</h3>
            <p>Choisissez vos lignes mobiles, TV, Internet et fixe selon vos besoins.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Offres fiables et actualisées</h3>
            <p>Nous ne proposons que des offres partenaires validées sur le marché belge.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Un service humain, pas juste un comparateur</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Chez <strong>SmartAbonnement</strong>, vous ne serez jamais seul. Nos <strong>experts commerciaux</strong> vous accompagnent tout au long de votre contrat, gratuitement.
        </p>
        <p className="text-md max-w-2xl mx-auto text-gray-600">
          Que ce soit pour choisir la meilleure offre, comprendre votre facture ou changer de fournisseur sans stress,
          vous bénéficiez d’un <strong>accompagnement 100% personnalisé</strong>.
        </p>
        <p className="mt-4 text-green-600 font-bold text-lg">
          ✔ Service gratuit — ✔ Conseils sur mesure — ✔ Disponibles à tout moment
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 italic">“Grâce à SmartAbonnement, j’ai réduit ma facture de 42€/mois. Et j’ai été accompagné du début à la fin. Merci !”</p>
            <p className="mt-4 font-semibold">— Sarah, Bruxelles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 italic">“Super facile à utiliser, et j’ai eu un vrai conseiller qui m’a tout expliqué. Je recommande !”</p>
            <p className="mt-4 font-semibold">— Mehdi, Liège</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 italic">“On m’a proposé une offre que je ne connaissais même pas chez Proximus. 100% satisfait.”</p>
            <p className="mt-4 font-semibold">— Julie, Namur</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Besoin d’aide pour vos factures ?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          Notre équipe d’experts ne se limite pas aux abonnements télécom. 📞 Vous avez un doute sur vos factures ?
          Vous payez trop pour votre Internet, GSM, TV, électricité, gaz ou même vos panneaux solaires ?
        </p>
        <p className="text-md max-w-2xl mx-auto text-gray-600 mb-6">
          Chez <strong>SmartAbonnement</strong>, nous analysons toutes vos factures du foyer et vous aidons à trouver les meilleures offres — en toute indépendance, et 100% gratuitement.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Votre nom" className="w-full p-3 border rounded" />
          <input type="tel" placeholder="Votre numéro de téléphone" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Votre adresse email (facultatif)" className="w-full p-3 border rounded" />
          <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
            Être rappelé gratuitement
          </Button>
        </form>
      </section>

      <section className="py-16 bg-blue-50 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Comparez les offres maintenant</h2>
        <p className="text-lg mb-10">Un outil simple, rapide et précis pour économiser dès aujourd’hui.</p>
        <Button size="lg" className="text-lg px-6 py-3 bg-blue-700 text-white hover:bg-blue-800">
          Lancer le simulateur
        </Button>
      </section>
    </main>
  );
}
