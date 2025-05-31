// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Dashboard.css';
// import ProgressRing from '../components/ProgressRing';
// import CosmicBadge from '../components/CosmicBadge';
// import NewsFeed from '../components/NewsFeed';
// import QuickAccessMenu from '../components/QuickAccessMenu';

// const Dashboard = () => {
//   const [userProgress, setUserProgress] = useState({
//     aerospace: 35,
//     rockets: 20,
//     solarSystem: 65
//   });
//   const [recentBadges, setRecentBadges] = useState([
//     { id: 1, name: 'Launch Pad', icon: '🚀', earned: '2025-05-28' },
//     { id: 2, name: 'Star Gazer', icon: '✨', earned: '2025-05-25' }
//   ]);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [activeTab, setActiveTab] = useState('home');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Simulate loading data
//     const fetchData = async () => {
//       // In a real app, you would fetch from your API
//       const mockLeaderboard = [
//         { id: 1, name: 'CosmoKid', points: 1250, avatar: '👨‍🚀' },
//         { id: 2, name: 'StellarSarah', points: 1100, avatar: '👩‍🚀' },
//         { id: 3, name: 'GalacticGuru', points: 980, avatar: '🧙‍♂️' },
//         { id: 4, name: 'AstroAmina', points: 875, avatar: '👩‍🔬' },
//         { id: 5, name: 'OrbitOmar', points: 820, avatar: '👨‍🔬' }
//       ];
//       setLeaderboard(mockLeaderboard);
//     };

//     fetchData();
//   }, []);

//   const handleModuleSelect = (module) => {
//     navigate(`/learn/${module}`);
//   };

//   const handleQuickAction = (action) => {
//     switch(action) {
//       case 'rocket-lab':
//         navigate('/rocket-lab');
//         break;
//       case 'solar-system':
//         navigate('/solar-system');
//         break;
//       case 'profile':
//         navigate('/profile');
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Animated Space Background */}
//       <div className="space-background">
//         <div className="stars"></div>
//         <div className="twinkling"></div>
//         <div className="cosmic-dust"></div>
//       </div>
      
//       {/* Main Dashboard Content */}
//       <div className="dashboard-content">
//         <header className="dashboard-header">
//           <h1>Mission Control Center</h1>
//           <p className="welcome-message">Welcome back, Space Explorer! Ready for your next mission?</p>
//         </header>

//         {/* Progress Overview */}
//         <section className="progress-section">
//           <h2>Your Cosmic Progress</h2>
//           <div className="progress-rings">
//             <ProgressRing 
//               progress={userProgress.aerospace} 
//               color="#6E3AFF" 
//               label="Aerospace" 
//               onClick={() => handleModuleSelect('aerospace')}
//             />
//             <ProgressRing 
//               progress={userProgress.rockets} 
//               color="#FF6B35" 
//               label="Rocket Science" 
//               onClick={() => handleModuleSelect('rockets')}
//             />
//             <ProgressRing 
//               progress={userProgress.solarSystem} 
//               color="#00F0FF" 
//               label="Solar System" 
//               onClick={() => handleModuleSelect('solar-system')}
//             />
//           </div>
//         </section>

//         {/* Quick Access Modules */}
//         <section className="quick-access">
//           <h2>Launch Pad</h2>
//           <QuickAccessMenu onSelect={handleQuickAction} />
//         </section>

//         {/* Recent Achievements */}
//         <section className="achievements-section">
//           <h2>Cosmic Badges</h2>
//           <div className="badges-grid">
//             {recentBadges.map(badge => (
//               <CosmicBadge 
//                 key={badge.id}
//                 name={badge.name}
//                 icon={badge.icon}
//                 earnedDate={badge.earned}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Leaderboard */}
//         <section className="leaderboard-section">
//           <h2>Galactic Leaderboard</h2>
//           <div className="leaderboard">
//             {leaderboard.map((user, index) => (
//               <div key={user.id} className="leaderboard-entry">
//                 <span className="rank">{index + 1}</span>
//                 <span className="avatar">{user.avatar}</span>
//                 <span className="name">{user.name}</span>
//                 <span className="points">{user.points} XP</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* News Feed */}
//         <section className="news-section">
//           <h2>Space News</h2>
//           <NewsFeed />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Dashboard.css';
import CosmicBadge from '../components/CosmicBadge';
import NewsFeed from '../components/NewsFeed';
import QuickAccessMenu from '../components/QuickAccessMenu';
import GameCard from './GameGuard';

const Dashboard = () => {
  const [userProgress, setUserProgress] = useState({
    aerospace: 72,
    rockets: 45,
    solarSystem: 88
  });
  const [recentBadges, setRecentBadges] = useState([
    { id: 1, name: 'Launch Pad', icon: '🚀', earned: '2025-05-28' },
    { id: 2, name: 'Star Gazer', icon: '✨', earned: '2025-05-25' },
    { id: 3, name: 'Orbit Master', icon: '🛰️', earned: '2025-05-20' }
  ]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [games, setGames] = useState([
    { 
      id: 1, 
      title: 'Rocket Builder', 
      icon: '🚀', 
      description: 'Design and launch your own spacecraft',
      progress: 65,
      path: '/games/rocket-builder'
    },
    { 
      id: 2, 
      title: 'Planet Explorer', 
      icon: '🪐', 
      description: 'Journey through the solar system',
      progress: 40,
      path: '/games/planet-explorer'
    },
    { 
      id: 3, 
      title: 'Cosmic Quiz', 
      icon: '🔭', 
      description: 'Test your space knowledge',
      progress: 85,
      path: '/games/cosmic-quiz'
    }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    const fetchData = async () => {
      const mockLeaderboard = [
        { id: 1, name: 'CosmoKid', points: 1250, avatar: '👨‍🚀' },
        { id: 2, name: 'StellarSarah', points: 1100, avatar: '👩‍🚀' },
        { id: 3, name: 'GalacticGuru', points: 980, avatar: '🧙‍♂️' },
        { id: 4, name: 'AstroAmina', points: 875, avatar: '👩‍🔬' },
        { id: 5, name: 'OrbitOmar', points: 820, avatar: '👨‍🔬' }
      ];
      setLeaderboard(mockLeaderboard);
    };

    fetchData();
  }, []);

  const handleModuleSelect = (module) => {
    navigate(`/learn/${module}`);
  };

  const handleGameSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      {/* Animated Space Background */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="cosmic-dust"></div>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Mission Control Center</h1>
          <p className="welcome-message">Welcome back, Space Explorer! Ready for your next mission?</p>
        </header>

        {/* Progress Overview */}
        <section className="progress-section">
          <h2>Your Cosmic Progress</h2>
          <div className="progress-rings">
            <div className="progress-ring-item" onClick={() => handleModuleSelect('aerospace')}>
              <CircularProgressbar
                value={userProgress.aerospace}
                text={`${userProgress.aerospace}%`}
                styles={buildStyles({
                  pathColor: `rgba(110, 58, 255, ${userProgress.aerospace / 100})`,
                  textColor: '#fff',
                  trailColor: 'rgba(110, 58, 255, 0.2)',
                  textSize: '1.5rem',
                  pathTransitionDuration: 1.5,
                })}
              />
              <div className="progress-label">Aerospace</div>
            </div>
            
            <div className="progress-ring-item" onClick={() => handleModuleSelect('rockets')}>
              <CircularProgressbar
                value={userProgress.rockets}
                text={`${userProgress.rockets}%`}
                styles={buildStyles({
                  pathColor: `rgba(255, 107, 53, ${userProgress.rockets / 100})`,
                  textColor: '#fff',
                  trailColor: 'rgba(255, 107, 53, 0.2)',
                  textSize: '1.5rem',
                  pathTransitionDuration: 1.5,
                })}
              />
              <div className="progress-label">Rocket Science</div>
            </div>
            
            <div className="progress-ring-item" onClick={() => handleModuleSelect('solar-system')}>
              <CircularProgressbar
                value={userProgress.solarSystem}
                text={`${userProgress.solarSystem}%`}
                styles={buildStyles({
                  pathColor: `rgba(0, 240, 255, ${userProgress.solarSystem / 100})`,
                  textColor: '#fff',
                  trailColor: 'rgba(0, 240, 255, 0.2)',
                  textSize: '1.5rem',
                  pathTransitionDuration: 1.5,
                })}
              />
              <div className="progress-label">Solar System</div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="games-section">
          <h2>Cosmic Games</h2>
          <div className="games-grid">
            {games.map(game => (
              <GameCard
                key={game.id}
                title={game.title}
                icon={game.icon}
                description={game.description}
                progress={game.progress}
                onClick={() => handleGameSelect(game.path)}
              />
            ))}
          </div>
        </section>

        {/* Quick Access Modules */}
        <section className="quick-access">
          <h2>Launch Pad</h2>
          <QuickAccessMenu onSelect={handleModuleSelect} />
        </section>

        {/* Recent Achievements */}
        <section className="achievements-section">
          <h2>Cosmic Badges</h2>
          <div className="badges-grid">
            {recentBadges.map(badge => (
              <CosmicBadge 
                key={badge.id}
                name={badge.name}
                icon={badge.icon}
                earnedDate={badge.earned}
              />
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="leaderboard-section">
          <h2>Galactic Leaderboard</h2>
          <div className="leaderboard">
            {leaderboard.map((user, index) => (
              <div key={user.id} className="leaderboard-entry">
                <span className="rank">{index + 1}</span>
                <span className="avatar">{user.avatar}</span>
                <span className="name">{user.name}</span>
                <span className="points">{user.points} XP</span>
              </div>
            ))}
          </div>
        </section>

        {/* News Feed */}
        <section className="news-section">
          <h2>Space News</h2>
          <NewsFeed />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;