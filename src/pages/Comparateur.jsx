// /pages/comparateur3.tsx — Intégration des nouveaux packs Scarlet et des GB mobile
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Sparkles, Phone, Tv, Wifi, Smartphone, Info } from 'lucide-react';

export default function Comparateur3() {
  const [internet, setInternet] = useState(false);
  const [tv, setTv] = useState(false);
  const [gsm, setGsm] = useState(false);
  const [fixe, setFixe] = useState(false);
  const [nbTv, setNbTv] = useState(1);
  const [nbMobiles, setNbMobiles] = useState(1);
  const [mobileLines, setMobileLines] = useState(['easy']);
  const [budget, setBudget] = useState('');
  const [results, setResults] = useState([]);
  const [economies, setEconomies] = useState([]);

  const offres = [
    {
      operateur: 'Proximus',
      couleur: 'bg-purple-100 border-purple-300',
      prixInternet: 52.99,
      prixTV: (nb) => 8 * nb,
      prixFixe: 8,
      prixGSM: (index, type) => {
        if (type === 'easy') return index === 0 ? 5 : 10;
        if (type === 'maxi') return index === 0 ? 16 : 21;
        if (type === 'unlimited') return index === 0 ? 23 : 28;
        return 0;
      },
      gbGSM: (type) => {
        if (type === 'easy') return 20;
        if (type === 'maxi') return 85;
        if (type === 'unlimited') return 300;
        return 0;
      },
      services: ['Internet', 'TV', 'GSM', 'Fixe']
    },
    {
      operateur: 'Orange',
      couleur: 'bg-orange-100 border-orange-300',
      prixInternet: 40,
      prixTV: (nb) => 10 * nb,
      prixFixe: 5,
      prixGSM: (index, type) => {
        if (type === 'easy') return 20;
        if (type === 'maxi') return 30;
        if (type === 'unlimited') return 45;
        return 0;
      },
      gbGSM: (type) => {
        if (type === 'easy') return 20;
        if (type === 'maxi') return 50;
        if (type === 'unlimited') return 300;
        return 0;
      },
      services: ['Internet', 'TV', 'GSM', 'Fixe']
    },
    {
      operateur: 'Scarlet',
      couleur: 'bg-red-100 border-red-300',
      prixInternet: 34,
      prixTV: (nb) => 10 * nb,
      prixFixe: 8,
      prixGSM: (index, type) => {
        if (internet && tv && fixe && gsm) {
          if (nbMobiles === 1 && type === 'easy') return 8;
          if (nbMobiles === 1 && type === 'maxi') return 13;
        }
        return 10;
      },
      gbGSM: (type) => {
        if (type === 'easy') return 20;
        if (type === 'maxi') return 40;
        return 0;
      },
      services: ['Internet', 'TV', 'GSM', 'Fixe']
    }
  ];

  const handleCompare = () => {
    const besoins = [];
    if (internet) besoins.push('Internet');
    if (tv) besoins.push('TV');
    if (gsm) besoins.push('GSM');
    if (fixe) besoins.push('Fixe');

    const filtrées = offres.filter(o => besoins.every(s => o.services.includes(s)));

    const calculées = filtrées.map(offre => {
      let total = 0;
      if (internet) total += offre.prixInternet;
      if (tv) total += offre.prixTV(nbTv);
      if (gsm) total += mobileLines.reduce((s, type, i) => s + offre.prixGSM(i, type), 0);
      if (fixe) total += offre.prixFixe;
      return { ...offre, total };
    });

    setResults(calculées);

    if (budget) {
      const eco = calculées.map(o => {
        const gain = (parseFloat(budget) - o.total) * 12;
        return gain > 0 ? `🎉 Vous pourriez économiser jusqu’à ${gain.toFixed(2)}€/an chez ${o.operateur}` : '';
      });
      setEconomies(eco);
    } else {
      setEconomies([]);
    }
  };

  const handleMobileChange = (value) => {
    const nb = parseInt(value);
    setNbMobiles(nb);
    const newLines = [...mobileLines];
    while (newLines.length < nb) newLines.push('easy');
    while (newLines.length > nb) newLines.pop();
    setMobileLines(newLines);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto cool-shadow">
    <h1 className="text-3xl mb-6 text-center fancy-gradient">Comparateur 3 — Simulation personnalisée</h1>

    <Card className="mb-6 border-l-8 border-gradient bg-blue-50">
      <CardContent className="space-y-4 card-content-padding">
        <h2 className="text-xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <Sparkles className="text-blue-500" /> Configurez votre pack actuel
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center gap-2"><input type="checkbox" checked={internet} onChange={() => setInternet(!internet)} /><Wifi size={18}/> Internet</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={tv} onChange={() => setTv(!tv)} /><Tv size={18}/> TV</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={gsm} onChange={() => setGsm(!gsm)} /><Smartphone size={18}/> GSM</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={fixe} onChange={() => setFixe(!fixe)} /><Phone size={18}/> Fixe</label>
          </div>
          {tv && <div><Label>Nombre de TV</Label><Input type="number" value={nbTv} min={1} onChange={e => setNbTv(Number(e.target.value))} /></div>}
          {gsm && (
            <div className="space-y-2">
              <Label>Nombre de lignes GSM</Label>
              <Input type="number" min={1} value={nbMobiles} onChange={e => handleMobileChange(e.target.value)} />
              {mobileLines.map((type, i) => (
                <div key={i}>
                  <Label>Ligne {i + 1}</Label>
                  <select value={type} onChange={e => {
                    const copy = [...mobileLines];
                    copy[i] = e.target.value;
                    setMobileLines(copy);
                  }} className="w-full border rounded p-2">
                    <option value="easy">Easy (20 GB)</option>
                    <option value="maxi">Maxi (50-85 GB)</option>
                    <option value="unlimited">Unlimited (300 GB)</option>
                  </select>
                </div>
              ))}
            </div>
          )}
          <div>
            <Label>Votre budget mensuel actuel en télécommunication (optionnel)</Label>
            <Input
              type="number"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              placeholder="Ex: 90 €"
            />
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              <Info size={14} className="text-blue-500" />
              Additionnez vos services actuels même s’ils viennent de différents opérateurs (ex: Internet chez Proximus + GSM chez Orange).
            </p>
          </div>
          <div className="pt-4 text-center">
            <Button className="bg-blue-700 text-white hover:bg-blue-800 btn-lg glow-button w-full">
              Voir les meilleures offres
            </Button>
          </div>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((r, i) => (
            <Card key={i} className={`border-l-8 ${r.couleur}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{r.operateur}</h3>
                  <Sparkles className="text-yellow-500" />
                </div>
                <div className="text-gray-700 mb-2">
                  {internet && <span className="inline-flex items-center gap-1 mr-4"><Wifi size={16}/> Internet</span>}
                  {tv && <span className="inline-flex items-center gap-1 mr-4"><Tv size={16}/> {nbTv} TV</span>}
                  {gsm && (
                    <span className="inline-flex items-center gap-1 mr-4">
                      <Smartphone size={16}/> {nbMobiles} ligne(s) – {mobileLines.map(t => `${r.gbGSM?.(t)}GB`).join(', ')}
                    </span>
                  )}
                  {fixe && <span className="inline-flex items-center gap-1 mr-4"><Phone size={16}/> Fixe</span>}
                </div>
                <p className="text-lg">💰 Total mensuel estimé : <strong>{r.total.toFixed(2)}€</strong></p>
                {economies[i] && <p className="text-green-600 mt-2 font-semibold">{economies[i]}</p>}
                <Button className="mt-4 w-full">Je veux changer</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    
  </div>
  );
}
