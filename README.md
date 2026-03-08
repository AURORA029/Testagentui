# 🎯 AinaVoice — Plateforme d'apprentissage gamifiée

**AinaVoice** est une Progressive Web App (PWA) mobile-first d'apprentissage de la **rhétorique et de l'art oratoire**, inspirée de l'UX Duolingo Prime avec une navigation par carte interactive type Candy Crush.

🌐 **Demo live** : [https://aurora029.github.io/Testagentui/](https://aurora029.github.io/Testagentui/)

---

## 🎮 Principe de fonctionnement

### 1. **Onboarding unique** 
Au premier lancement, l'utilisateur voit un écran d'accueil qui explique le concept et propose de commencer son parcours. Cet écran n'apparaît qu'une seule fois grâce à la persistance locale.

### 2. **Carte interactive (Map Dashboard)**
- Navigation par **carte zigzag verticale** avec 3 niveaux débloquables
- Design type **Candy Crush** : nœuds avec offsets alternés
- Nœud actif avec animation pulse et bordure rouge
- Déblocage progressif : niveau N+1 débloqué après validation du niveau N

### 3. **Parcours d'apprentissage tri-modal**
Chaque module suit ce flow :

```
📚 Leçon texte + vidéo → 🎥 Lecture vidéo YouTube → ✅ Validation
                    ↓
              ❓ Quiz (5 questions)
                    ↓
              🎉 Résultats + XP
```

#### Phase 1 : Leçon
- **Texte pédagogique** scrollable (formaté Markdown-like)
- **Vidéo YouTube** intégrée via `react-player` (responsive 16:9)
- Bouton "Valider la leçon" → **+15 XP** (anti-double XP via tracking)

#### Phase 2 : Quiz
- **5 questions QCM** avec 4 choix
- Feedback immédiat (✅ vert / ❌ rouge)
- Score final calculé automatiquement

#### Phase 3 : Résultats
- Affichage du score `/5` avec message personnalisé
- Gain XP selon performance : 
  - 5/5 → +50 XP
  - 4/5 → +40 XP
  - 3/5 → +30 XP
  - < 3 → +10 XP
- Badge de performance (Or/Argent/Bronze)
- Déblocage du module suivant

### 4. **Système de progression**
- **Total XP** affiché en temps réel
- **Modules débloqués** sauvegardés localement (Zustand + localStorage)
- État persistant : XP, leçons complétées, quizs validés

---

## 🎨 Design System "Duolingo Prime"

Palette rouge UCM + UI 3D gamifiée :

| Élément | Style |
|---------|-------|
| **Boutons primaires** | `bg-red-900 text-white rounded-2xl border-b-4 border-red-950` |
| **Boutons secondaires** | `bg-white text-red-900 rounded-2xl border-b-4 border-gray-300` |
| **Effet 3D** | `active:translate-y-1 active:border-b-0` |
| **Cartes modules** | `bg-white rounded-2xl border-2` + ombre légère |
| **Badges** | Dégradés Or/Argent/Bronze avec `bg-gradient-to-br` |
| **Nœud actif (map)** | `bg-red-600 border-red-800 animate-pulse` |

**Mobile-first** : Viewport dynamique (`h-[100dvh]`), navigation bottom fixe, scroll optimisé.

---

## 🛠 Stack technique

| Technologie | Usage |
|-------------|-------|
| **React 19.2** | Composants UI + hooks |
| **React Router DOM 7.13** | Routing (HashRouter pour GitHub Pages) |
| **Zustand 5.0** | State management + persistance localStorage |
| **react-player 3.4** | Lecteur vidéo YouTube responsive |
| **Tailwind CSS 4.2** | Design system + utilitaires |
| **Framer Motion 12** | Animations (confettis, transitions) |
| **Lucide React** | Icônes SVG |
| **Vite 7.3** | Build tooling ultra-rapide |

---

## 📦 Installation & démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev
```

App disponible sur **http://localhost:5173**

## 🚀 Build & déploiement

### Build local
```bash
npm run build
npm run preview
```

### Déploiement GitHub Pages (automatique)
Le workflow GitHub Actions (`.github/workflows/deploy.yml`) déploie automatiquement sur chaque push vers `main`.

**URL de production** : [https://aurora029.github.io/Testagentui/](https://aurora029.github.io/Testagentui/)

---

## 📂 Structure du projet

```
src/
├── App.jsx                     # Routing + RootRoute (gate onboarding)
├── main.jsx                    # Entry point (HashRouter)
├── components/
│   ├── features/
│   │   ├── Onboarding.jsx      # Écran d'accueil unique
│   │   ├── Home.jsx            # Page résumé/progression
│   │   ├── Dashboard.jsx       # Carte interactive (map)
│   │   ├── VideoLesson.jsx     # Leçon texte + vidéo
│   │   ├── VideoPlayer.jsx     # Player YouTube responsive
│   │   ├── LessonText.jsx      # Texte pédagogique scrollable
│   │   ├── QuizEngine.jsx      # Moteur de quiz
│   │   ├── QuizQuestion.jsx    # Question individuelle
│   │   └── QuizResult.jsx      # Écran résultats + XP
│   ├── layout/
│   │   ├── AppLayout.jsx       # Layout mobile (bottom nav)
│   │   ├── Header.jsx          # Header dynamique
│   │   └── Footer.jsx          # Footer
│   └── ui/
│       ├── Button.jsx          # Bouton réutilisable
│       ├── ModuleCard.jsx      # Carte module (map)
│       └── Badge.jsx           # Badge performance
├── store/
│   └── useUserStore.js         # State Zustand (XP, modules, onboarding)
├── data/
│   ├── moduleData.js           # 3 modules avec leçons + vidéos
│   └── quizData.js             # Questions de quiz
├── hooks/
│   └── useQuiz.js              # Logique quiz (sélection, score)
└── constants/
    └── config.js               # Configuration globale
```

---

## ✨ Features clés

✅ **Onboarding one-time** (persistance localStorage)  
✅ **Navigation carte zigzag** type Candy Crush  
✅ **Vidéos YouTube intégrées** (react-player responsive)  
✅ **Anti-double XP** sur les leçons complétées  
✅ **Quiz interactif** avec feedback immédiat  
✅ **Système XP + déblocage progressif**  
✅ **Mobile-first** (100dvh viewport, bottom nav)  
✅ **HashRouter** optimisé GitHub Pages  
✅ **PWA-ready** (vite-plugin-pwa installé)

---

## 🎓 Modules de formation

1. **Les Fondamentaux** — Bases de la rhétorique  
2. **L'Art de Convaincre** — Techniques de persuasion  
3. **Maîtrise Avancée** — Éloquence et impact

Chaque module = 1 leçon + 1 vidéo + 1 quiz de 5 questions.

---

## 🔮 Roadmap

- [ ] Service Worker PWA (installation offline)
- [ ] Système de streaks (séries quotidiennes)
- [ ] Leaderboard communautaire
- [ ] Mode sombre
- [ ] Notifications push

---

## 📄 Licence

Projet personnel — © 2026 AURORA029
