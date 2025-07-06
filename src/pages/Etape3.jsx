// /pages/etape3.tsx — Étape récapitulative sans liens entre fichiers
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Phone, Tv, Wifi, Smartphone } from 'lucide-react';

export default function Etape3() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [heure, setHeure] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // Données simulées de l'offre sélectionnée
  const offre = {
    operateur: 'Proximus',
    total: 89.99,
    services: {
      internet: true,
      tv: 1,
      gsm: 2,
      fixe: true
    },
    economie: 240
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">🎉 Résumé de votre meilleure offre</h1>

      <Card className="border-l-4 border-green-400 bg-green-50 mb-6">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl font-semibold text-green-800">Offre sélectionnée chez {offre.operateur}</h2>
          <p><strong>Prix total estimé :</strong> {offre.total}€/mois</p>
          <p><strong>Services inclus :</strong></p>
          <div className="text-gray-700">
            {offre.services.internet && <p className="flex items-center gap-2"><Wifi size={16}/> Internet</p>}
            {offre.services.tv > 0 && <p className="flex items-center gap-2"><Tv size={16}/> {offre.services.tv} TV</p>}
            {offre.services.gsm > 0 && <p className="flex items-center gap-2"><Smartphone size={16}/> {offre.services.gsm} ligne(s) mobile</p>}
            {offre.services.fixe && <p className="flex items-center gap-2"><Phone size={16}/> Fixe</p>}
          </div>
          <p className="text-green-600 font-semibold mt-2">✅ Vous économisez jusqu’à {offre.economie}€/an</p>
        </CardContent>
      </Card>

      {!formSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Être rappelé par un conseiller</h3>
          <div>
            <Label htmlFor="prenom">Prénom</Label>
            <Input id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="tel">Téléphone</Label>
            <Input id="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="heure">Heure de préférence</Label>
            <Input id="heure" value={heure} onChange={(e) => setHeure(e.target.value)} placeholder="Ex : 17h-19h" />
          </div>
          <div>
            <Label htmlFor="msg">Message optionnel</Label>
            <Input id="msg" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">Envoyer ma demande</Button>
        </form>
      ) : (
        <div className="text-center text-green-700 text-lg font-semibold mt-6">
          ✅ Votre demande a bien été envoyée. Un conseiller vous contactera rapidement !
        </div>
      )}
    </div>
  );
}
