'use client';

import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ nom: '', courriel: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ nom: '', courriel: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="bg-[#1e3a5f] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Sprint Comptable Gesys
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Votre assistant comptable IA<br />
            <span className="text-cyan-400">opérationnel en 10 jours</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            Un technicien comptable passe <strong className="text-white">30 à 40 % de son temps</strong> sur des tâches répétitives — saisie, rapprochements, rappels, dates fiscales.
          </p>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Ce temps vous coûte entre <strong className="text-cyan-300">40 000 $ et 84 000 $ par an</strong> en salaire et charges.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-colors duration-200"
          >
            Réservez une démo gratuite →
          </a>
        </div>
      </section>

      {/* LIVRABLES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Ce qu&apos;on vous livre en 10 jours
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Un système clé en main, configuré et formé pour votre bureau comptable.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🤖', title: 'Agent configuré et opérationnel', desc: 'Intégré à Teams ou Discord selon vos préférences.' },
              { icon: '🏦', title: 'Catégorisation automatique', desc: 'Transactions bancaires classées automatiquement, sans intervention manuelle.' },
              { icon: '📅', title: 'Calendrier fiscal intelligent', desc: 'Alertes TPS/TVQ, DAS, dates T1/T2 — rien n\'est oublié.' },
              { icon: '📨', title: 'Modèles de rappels clients', desc: '3 niveaux : doux, ferme, final. Envoi automatique selon les échéances.' },
              { icon: '✨', title: 'Agent nommé à votre image', desc: 'Votre assistant a un nom, une identité, votre marque.' },
              { icon: '🎓', title: 'Formation de 2 heures', desc: 'Avec Yves Gagnon, en direct. Votre équipe sait tout utiliser.' },
              { icon: '📄', title: 'Documentation claire', desc: 'Guide d\'utilisation complet remis à la livraison.' },
              { icon: '⚖️', title: 'Contrat + politique Loi 25', desc: 'Contrat de service et politique de confidentialité conformes à la Loi 25.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            3 formules pour tous les bureaux
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Comparaison : la formule Standard coûte <strong className="text-[#1e3a5f]">14 400 $/an</strong> — vs <strong className="text-red-600">40 000 $/an</strong> pour un technicien junior.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-[#1e3a5f]">1 500 $</span>
                <span className="text-gray-500 ml-1">setup</span>
                <div className="text-lg font-semibold text-cyan-600 mt-1">+ 800 $/mois</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> 1 tâche automatisée</li>
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> 1 utilisateur</li>
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Tous les livrables inclus</li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-[#1e3a5f] font-semibold py-3 px-6 rounded-xl transition-colors">
                Démarrer →
              </a>
            </div>

            {/* Standard — highlight */}
            <div className="rounded-2xl border-2 border-cyan-500 p-8 shadow-xl flex flex-col relative bg-[#1e3a5f] text-white scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Recommandé
              </div>
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">2 500 $</span>
                <span className="text-blue-200 ml-1">setup</span>
                <div className="text-lg font-semibold text-cyan-400 mt-1">+ 1 200 $/mois</div>
              </div>
              <ul className="text-blue-100 text-sm space-y-2 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> 3 tâches automatisées</li>
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> 3 utilisateurs</li>
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> Tous les livrables inclus</li>
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> 14 400 $/an — vs 40 000 $ technicien</li>
              </ul>
              <a href="#contact" className="block text-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Choisir Standard →
              </a>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-[#1e3a5f]">3 500 $</span>
                <span className="text-gray-500 ml-1">setup</span>
                <div className="text-lg font-semibold text-cyan-600 mt-1">+ 1 800 $/mois</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Suite complète</li>
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Personnalisations avancées</li>
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Tous les livrables inclus</li>
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Support prioritaire</li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-[#1e3a5f] font-semibold py-3 px-6 rounded-xl transition-colors">
                Démarrer →
              </a>
            </div>
          </div>

          {/* Pourquoi Gesys */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">Pourquoi Gesys ?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: '🇨🇦', title: 'Données au Canada', desc: 'Hébergement canadien, conformité Loi 25 garantie.' },
                { icon: '🧾', title: 'Spécialisé CPA Québec', desc: 'TPS/TVQ, Revenu QC — on connaît votre réalité.' },
                { icon: '🤝', title: 'Accompagnement personnel', desc: 'Yves Gagnon est impliqué à chaque implémentation.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-[#1e3a5f] mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#1e3a5f]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Réservez votre démo gratuite
          </h2>
          <p className="text-blue-200 text-center mb-10 text-lg">
            30 minutes pour voir comment l&apos;agent peut transformer votre bureau comptable.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Nom</label>
              <input
                type="text"
                required
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Courriel</label>
              <input
                type="email"
                required
                value={form.courriel}
                onChange={(e) => setForm({ ...form, courriel: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="vous@cabinet.ca"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                placeholder="Parlez-nous de votre bureau comptable et de vos besoins..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-colors duration-200"
            >
              {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande →'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-center font-semibold">✅ Message envoyé ! On vous contacte sous 24h.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-semibold">❌ Erreur lors de l&apos;envoi. Réessayez ou contactez-nous directement.</p>
            )}
          </form>
          <div className="text-center mt-8 text-blue-200 text-lg">
            📧 <a href="mailto:yves@gesys.ai" className="hover:text-white underline">yves@gesys.ai</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            🌐 <a href="https://gesys.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">gesys.ai</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#162d4a] text-blue-300 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Gesys Solutions Inc. — Tous droits réservés. Hébergement canadien. Conformité Loi 25.</p>
      </footer>
    </main>
  );
}
