'use client';

import { useState } from 'react';

const verticals = [
  {
    icon: '💼',
    label: 'Cabinet comptable CPA',
    active: true,
    problem: '30-40 % du temps de votre technicien part en saisie, rapprochements et rappels.',
    solution: 'Sophie catégorise vos transactions, gère votre calendrier fiscal et relance vos AR — pendant que vous conseillez.',
    agentName: 'Agent Sophie',
  },
  {
    icon: '💻',
    label: 'Consultant IT / MSP',
    active: true,
    problem: 'Vos tickets L1 consomment vos meilleurs analystes, heure après heure.',
    solution: "Votre agent gère le L1 en 2 secondes, escalade intelligemment et génère vos rapports clients automatiquement.",
    agentName: 'Agent Max',
  },
  {
    icon: '⚖️',
    label: 'Notaire',
    active: false,
  },
  {
    icon: '🏠',
    label: 'Courtier immobilier',
    active: false,
  },
  {
    icon: '🏥',
    label: 'Clinique privée',
    active: false,
  },
];

const processSteps = [
  { days: 'Jour 1–2', title: 'Appel de découverte', desc: 'On apprend vos workflows, vos outils, vos priorités. 2 heures, pas plus.' },
  { days: 'Jour 3–6', title: 'Configuration et personnalisation', desc: "L'agent est configuré avec votre terminologie, vos procédures, vos clients." },
  { days: 'Jour 7–8', title: 'Tests en conditions réelles', desc: 'On valide avec vos vraies données avant de mettre en production.' },
  { days: 'Jour 9–10', title: 'Formation de votre équipe', desc: '2 heures avec Yves Gagnon. Mise en production. Documentation remise.' },
  { days: 'Mois 2+', title: 'Gesys monitore et améliore', desc: "Votre agent est opérationnel. On le met à jour, on le supervise, on l'améliore." },
];

export default function Home() {
  const [form, setForm] = useState({ nom: '', courriel: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [activeVertical, setActiveVertical] = useState(0);

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

  const currentVertical = verticals[activeVertical];

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── SECTION 1 — HERO ─────────────────────────────────────── */}
      <section className="bg-[#1e3a5f] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Gesys AI — Managed Intelligence Provider
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Votre premier collaborateur IA —<br />
            <span className="text-cyan-400">formé pour votre métier, opérationnel en 10 jours.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
            Gesys AI configure et opère des agents d&apos;intelligence artificielle spécialisés pour votre domaine —
            comptable, consultant IT, notaire, courtier.
          </p>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Vous supervisez. L&apos;agent fait le travail de fond.
          </p>

          {/* 3 bullets */}
          <ul className="text-left max-w-xl mx-auto space-y-3 mb-12">
            <li className="flex items-start gap-3 text-blue-100">
              <span className="mt-1 text-cyan-400 font-bold text-lg">✅</span>
              <span><strong className="text-white">Récupérez 10–15 heures/semaine</strong> en déléguant vos tâches répétitives à un agent qui ne se fatigue pas.</span>
            </li>
            <li className="flex items-start gap-3 text-blue-100">
              <span className="mt-1 text-cyan-400 font-bold text-lg">✅</span>
              <span><strong className="text-white">Grandissez sans embauche</strong> — prenez plus de clients avec la même équipe, sans coûts fixes supplémentaires.</span>
            </li>
            <li className="flex items-start gap-3 text-blue-100">
              <span className="mt-1 text-cyan-400 font-bold text-lg">✅</span>
              <span><strong className="text-white">Dormez tranquille</strong> — vos données restent au Canada, l&apos;agent est supervisé, et Yves est joignable directement.</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-colors duration-200"
            >
              Demander une démo gratuite →
            </a>
            <a
              href="#processus"
              className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900 font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Voir comment ça fonctionne
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — VERTICALS ────────────────────────────────── */}
      <section id="verticals" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-3">
            Votre agent IA, formé pour votre réalité —<br className="hidden md:block" /> pas pour un cas générique.
          </h2>
          <p className="text-gray-600 text-center mb-10 text-lg max-w-2xl mx-auto">
            Choisissez votre métier. On vous montre exactement ce que votre agent peut faire.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {verticals.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setActiveVertical(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                  activeVertical === i
                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                    : 'bg-white text-[#1e3a5f] border-gray-200 hover:border-cyan-400'
                }`}
              >
                <span>{v.icon}</span>
                <span>{v.label}</span>
                {!v.active && <span className="text-xs text-cyan-500 font-normal">🔜</span>}
              </button>
            ))}
          </div>

          {/* Active card */}
          {currentVertical.active ? (
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 max-w-2xl mx-auto">
              <div className="text-4xl mb-4 text-center">{currentVertical.icon}</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] text-center mb-6">{currentVertical.label}</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-xl px-5 py-4">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide block mb-1">Le problème</span>
                  <p className="text-gray-700 text-sm">{currentVertical.problem}</p>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 rounded-xl px-5 py-4">
                  <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide block mb-1">La solution Gesys AI</span>
                  <p className="text-gray-700 text-sm">{currentVertical.solution}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-[#1e3a5f] text-cyan-300 text-sm font-semibold px-4 py-2 rounded-full">
                  {currentVertical.agentName}
                </span>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200"
                >
                  Demander une démo gratuite →
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 max-w-2xl mx-auto text-center">
              <div className="text-5xl mb-4">{currentVertical.icon}</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{currentVertical.label}</h3>
              <p className="text-gray-500 mb-6">Ce vertical est en développement. Inscrivez-vous à la liste d&apos;attente pour être parmi les premiers avisés.</p>
              <a
                href="#contact"
                className="inline-block bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
              >
                Rejoindre la liste d&apos;attente →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 3 — DIFFÉRENCIATEURS ─────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Pourquoi Gesys AI —<br className="hidden md:block" /> pas un SaaS, pas une firme de conseil.
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg max-w-2xl mx-auto">
            La différence est fondamentale. Voici pourquoi.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bloc 1 */}
            <div className="rounded-2xl border border-gray-100 p-7 shadow-sm">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Gesys AI n&apos;est PAS un SaaS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un SaaS vous donne un logiciel à apprendre et configurer vous-même. Gesys AI vous livre un agent
                déjà opérationnel — configuré pour vos workflows réels, avec votre terminologie, prêt à travailler.
              </p>
              <p className="text-gray-400 text-xs mt-4 italic">
                La différence entre acheter une voiture à assembler et en recevoir une qui démarre.
              </p>
            </div>
            {/* Bloc 2 */}
            <div className="rounded-2xl border border-gray-100 p-7 shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Gesys AI n&apos;est PAS une consultance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Une firme de conseil vous facture des dizaines de milliers pour un rapport qui finit dans un tiroir.
                Gesys AI livre quelque chose qui tourne en production après 10 jours. Tangible. Mesurable. En mensuel.
              </p>
              <p className="text-gray-400 text-xs mt-4 italic">
                La différence entre une étude de faisabilité et un employé qui commence lundi.
              </p>
            </div>
            {/* Bloc 3 */}
            <div className="rounded-2xl border-2 border-cyan-500 p-7 shadow-md bg-cyan-50">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Gesys AI EST un Managed Intelligence Provider</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comme un MSP gère votre infrastructure IT, Gesys AI gère votre intelligence opérationnelle.
                Vos agents IA sont mis à jour, supervisés et optimisés en continu. Vous vous abonnez à un service.
                Pas à un logiciel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — PROCESSUS 10 JOURS ───────────────────────── */}
      <section id="processus" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-3">
            De zéro à votre premier agent IA<br className="hidden md:block" /> en 10 jours ouvrables.
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Un processus clair, des livrables réels à chaque étape.
          </p>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-5 items-start bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="inline-block bg-[#1e3a5f] text-cyan-300 text-xs font-bold px-3 py-1 rounded-full">
                    {step.days}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a5f] mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — GARANTIES ────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-3">
            Ce qui compte pour vous.<br className="hidden md:block" /> Ce qu&apos;on garantit.
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Trois engagements non-négociables. Dès le départ.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm">
              <div className="text-5xl mb-4">🇨🇦</div>
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">Données au Canada</h3>
              <p className="text-gray-600 text-sm">
                Votre agent est hébergé sur Azure Canada Central. Vos données ne quittent jamais le pays.
                Conformité Loi 25 intégrée dès le départ.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">Vous restez en contrôle</h3>
              <p className="text-gray-600 text-sm">
                Chaque action sensible passe par votre approbation. L&apos;agent suggère et exécute.
                Vous supervisez. Audit trail complet de toutes les actions.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">Un vrai interlocuteur</h3>
              <p className="text-gray-600 text-sm">
                Yves Gagnon vous accompagne personnellement. Pas un centre d&apos;appels.
                Pas un ticket de support. Un expert joignable directement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — TARIFS ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
            Un investissement qui se rembourse<br className="hidden md:block" /> en quelques mois.
          </h2>
          <p className="text-center text-gray-700 font-semibold text-lg mb-10 max-w-2xl mx-auto">
            <strong className="text-[#1e3a5f]">Un technicien comptable junior coûte 40 000 $/an. Le plan Standard revient à 14 400 $/an.</strong>{' '}
            Votre équipe garde le temps de valeur. L&apos;agent gère le reste.
          </p>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col bg-white">
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
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Formation équipe (2h)</li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-[#1e3a5f] font-semibold py-3 px-6 rounded-xl transition-colors">
                Démarrer →
              </a>
            </div>

            {/* Standard — highlight */}
            <div className="rounded-2xl border-2 border-cyan-500 p-8 shadow-xl flex flex-col relative bg-[#1e3a5f] text-white scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
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
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> Formation équipe (2h)</li>
                <li className="flex gap-2"><span className="text-cyan-400">✓</span> 14 400 $/an — vs 40 000 $ technicien</li>
              </ul>
              <a href="#contact" className="block text-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Choisir Standard →
              </a>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col bg-white">
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
                <li className="flex gap-2"><span className="text-cyan-500">✓</span> Formation équipe (2h)</li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-[#1e3a5f] font-semibold py-3 px-6 rounded-xl transition-colors">
                Démarrer →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 bg-[#1e3a5f]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Demandez votre démo gratuite
          </h2>
          <p className="text-blue-200 text-center mb-10 text-lg">
            30 minutes pour voir comment un agent peut transformer votre pratique.
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
                placeholder="vous@votreentreprise.ca"
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
                placeholder="Parlez-nous de votre entreprise et de ce que vous aimeriez automatiser..."
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

      {/* ── SECTION 7 — TÉMOIGNAGE ───────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12">
            Ce que nos clients disent
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
            <div className="text-5xl mb-6 text-cyan-400">&ldquo;</div>
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              L&apos;agent a catégorisé 1 200 transactions en 15 minutes lors du pilote.
              Pour mon équipe, c&apos;est 3 jours de travail.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">
                MJ
              </div>
              <div className="text-left">
                <div className="font-bold text-[#1e3a5f]">Marie-Josée Tremblay, CPA</div>
                <div className="text-gray-500 text-sm">Cabinet Tremblay &amp; Associés, Sherbrooke</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — CTA FINAL ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1e3a5f] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Prêt à voir votre agent IA en action ?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Réservez une démo de 30 minutes. Yves vous présente l&apos;agent sur vos propres données.
            Aucun engagement.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg transition-colors duration-200"
          >
            Réserver ma démo gratuite →
          </a>
        </div>
      </section>

      {/* ── SECTION 9 — FOOTER ───────────────────────────────────── */}
      <footer className="bg-[#162d4a] text-blue-300 py-8 px-6 text-center text-sm">
        <p className="font-semibold text-blue-200 mb-2">Votre métier. Votre agent. Toujours disponible.</p>
        <p>© {new Date().getFullYear()} Gesys Solutions Inc. — Tous droits réservés.</p>
        <p className="mt-1">Hébergement canadien (Azure Canada Central) · Conformité Loi 25 · agents.gesys.ai</p>
      </footer>

    </main>
  );
}
