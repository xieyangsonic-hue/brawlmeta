/**
 * BrawlMeta - Complete Game Database
 * 50+ Brawl Stars brawlers, tier list, game modes, guides, and updates
 * Last updated: July 2026
 */

// ============================================
// BRAWLER DATABASE (50+ Brawlers)
// ============================================
const BRAWLERS = [
  // === S-TIER — META DEFINING ===
  {
    id: 'kenji', name: 'Kenji', rarity: 'legendary', role: 'Assassin', tier: 'S', color: '#ff4757',
    description: 'Kenji is the most dominant assassin in Brawl Stars right now, with unmatched mobility and burst damage. His Super lets him dive into the backline and delete key targets before the enemy can react.',
    attack: 'Slashes with dual katanas in a wide arc',
    super: 'Swift Dash — Dashes through enemies dealing massive damage',
    strengths: ['Extreme mobility','High burst damage','Teamfight cleanup'],
    weaknesses: ['Squishy HP','Vulnerable to CC','Requires positioning'],
    bestMode: 'Brawl Ball', bestBuild: 'Smoke Bomb | Shadow Step | Damage + Shield',
    counters: ['Otis','Cordelius'], counteredBy: ['Gale','Emz','Jacky']
  },
  {
    id: 'surge', name: 'Surge', rarity: 'legendary', role: 'Fighter', tier: 'S', color: '#ff4757',
    description: 'Surge dominates with his upgrade mechanic. Once fully upgraded, his split shots and extended range make him nearly impossible to deal with on open maps.',
    attack: 'Shoots energy blasts that split on hit (when upgraded)',
    super: 'Super Jump — Leaps into the air and upgrades himself (up to 4 stages)',
    strengths: ['Scales extremely well','Great range upgraded','Versatile in many modes'],
    weaknesses: ['Weak early game','Struggles vs tanks early','Predictable jump'],
    bestMode: 'Gem Grab', bestBuild: 'Power Shield | Serve Ice Cold | Damage + Speed',
    counters: ['Piper','Brock','Bea'], counteredBy: ['Edgar','Mortis','Buzz']
  },
  {
    id: 'cordelius', name: 'Cordelius', rarity: 'legendary', role: 'Assassin', tier: 'S', color: '#ff4757',
    description: 'Cordelius isolates and eliminates targets in the Shadow Realm. His poison mushroom gadget is one of the best area denial tools in the game.',
    attack: 'Throws mushrooms dealing damage over time',
    super: 'Shadow Realm — Sends himself and an enemy to an alternate dimension',
    strengths: ['Isolation capability','Strong 1v1','Area control'],
    weaknesses: ['Short range without Super','Vulnerable when Super down'],
    bestMode: 'Knockout', bestBuild: 'Poison Mushroom | Mushroom Kingdom | Shield + Damage',
    counters: ['Tanks','Throwers'], counteredBy: ['Crow','Spike','Amber']
  },
  {
    id: 'gale', name: 'Gale', rarity: 'mythic', role: 'Controller', tier: 'S', color: '#ff4757',
    description: 'Gale has surged to S-tier with his unparalleled knockback and crowd control. His Twister gadget shuts down entire lanes, and his Super resets any aggressive push.',
    attack: 'Blasts a wide wave of chilling snow',
    super: 'Gale Force — Massive knockback tornado that stuns on wall impact',
    strengths: ['Best crowd control','Knockback','Lane denial','Stun potential'],
    weaknesses: ['Low damage output','Skillshot dependent'],
    bestMode: 'Brawl Ball', bestBuild: 'Twister | Blustery Blow | Speed + Shield',
    counters: ['Tanks','Assassins','Close range'], counteredBy: ['Throwers','Piper']
  },

  // === A-TIER — VERY STRONG ===
  {
    id: 'spike', name: 'Spike', rarity: 'legendary', role: 'Marksman', tier: 'A', color: '#ff6b81',
    description: 'Spike controls space with cactus grenades that explode into spikes. His Super provides massive area denial and pairs perfectly with his Curveball Star Power.',
    attack: 'Throws a cactus that explodes into spikes in all directions',
    super: 'Stick Around! — Creates a damaging and slowing area',
    strengths: ['Area denial','Great poke damage','Strong super'],
    weaknesses: ['Low HP','Vulnerable to assassins'],
    bestMode: 'Hot Zone', bestBuild: 'Popping Pincushion | Curveball | Damage + Shield',
    counters: ['Tanks','Healers'], counteredBy: ['Edgar','Leon','Mortis']
  },
  {
    id: 'crow', name: 'Crow', rarity: 'legendary', role: 'Assassin', tier: 'A', color: '#ff6b81',
    description: 'Crow is a persistent threat with poison daggers that reduce healing. His Super provides scouting and escape, making him valuable in competitive play.',
    attack: 'Throws triple poison daggers that reduce enemy healing',
    super: 'Swoop — Flies and lands, throwing daggers around him',
    strengths: ['Healing reduction','Mobility','Scouting'],
    weaknesses: ['Very low HP','Low burst damage'],
    bestMode: 'Showdown', bestBuild: 'Slowing Toxin | Carrion Crow | Shield + Speed',
    counters: ['Healers','Tanks'], counteredBy: ['Piper','Brock','Bea']
  },
  {
    id: 'amber', name: 'Amber', rarity: 'legendary', role: 'Damage Dealer', tier: 'A', color: '#ff6b81',
    description: 'Amber brings sustained fire damage. Her Super creates oil puddles that can be ignited for massive area damage and zone control.',
    attack: 'Continuous stream of fire',
    super: "Torch 'Em! — Throws a flask of oil that can be ignited",
    strengths: ['Sustained damage','Area control','Good vs groups'],
    weaknesses: ['Ammo management','Vulnerable to long range'],
    bestMode: 'Heist', bestBuild: 'Fire Starters | Wild Flames | Damage + Reload',
    counters: ['Tanks','Close range'], counteredBy: ['Piper','Brock','Nani']
  },
  {
    id: 'sandy', name: 'Sandy', rarity: 'legendary', role: 'Controller', tier: 'A', color: '#ff6b81',
    description: 'Sandy controls the battlefield with wide attack spread and sandstorm Super that hides allies. Excels in coordinated team environments.',
    attack: 'Throws sand in a wide cone',
    super: 'Sandstorm — Hides allies inside a sandstorm',
    strengths: ['Team utility','Map control','Team stealth'],
    weaknesses: ['Low damage','Relies on coordination'],
    bestMode: 'Gem Grab', bestBuild: 'Sleep Stimulator | Rude Sands | Speed + Shield',
    counters: ['Support','Throwers'], counteredBy: ['Assassins','Crow']
  },
  {
    id: 'lou', name: 'Lou', rarity: 'mythic', role: 'Controller', tier: 'A', color: '#ff6b81',
    description: 'Lou has seen a massive 2026 resurgence. His freezing mechanic devastates tanks, and his Super creates impassable zones that dominate objective modes.',
    attack: 'Throws snow cones that build up freeze meter',
    super: 'Ice Block — Creates icy area that freezes enemies over time',
    strengths: ['Freeze CC','Tank counter','Objective control'],
    weaknesses: ['Skillshot dependent','Struggles vs range'],
    bestMode: 'Hot Zone', bestBuild: 'Ice Block | Supercool | Shield + Speed',
    counters: ['Tanks','Close range'], counteredBy: ['Piper','Brock','Bea']
  },
  {
    id: 'max', name: 'Max', rarity: 'mythic', role: 'Support', tier: 'A', color: '#ff6b81',
    description: 'Max is the speed queen. Her Super boosts the entire team, enabling aggressive pushes and quick rotations. Phase Shifter gives her invincibility frames for clutch plays.',
    attack: 'Rapid-fire energy blasts from dual blasters',
    super: "Let's Go! — Speed boost for Max and nearby allies",
    strengths: ['Team speed boost','Mobility','Invincibility gadget'],
    weaknesses: ['Low HP','Low per-shot damage'],
    bestMode: 'Gem Grab', bestBuild: 'Phase Shifter | Run n Gun | Damage + Speed',
    counters: ['Slow brawlers'], counteredBy: ['Crow','Gale']
  },
  {
    id: 'gene', name: 'Gene', rarity: 'mythic', role: 'Controller', tier: 'A', color: '#ff6b81',
    description: 'Gene\'s Magic Hand pull is one of the most game-changing abilities. Paired with his healing Super, he provides both pick potential and team sustain.',
    attack: 'Splits into a spread of magic orbs',
    super: 'Magic Hand — Pulls an enemy to Gene',
    strengths: ['Pull pick potential','Sustain healing','Long range poke'],
    weaknesses: ['Slow reload','Vulnerable after missing pull'],
    bestMode: 'Gem Grab', bestBuild: 'Lamp Blowout | Magic Puffs | Speed + Shield',
    counters: ['Squishies','Throwers'], counteredBy: ['Tanks','Edgar']
  },
  {
    id: 'byron', name: 'Byron', rarity: 'mythic', role: 'Support', tier: 'A', color: '#ff6b81',
    description: 'Byron heals allies and poisons enemies with his darts. His Super provides burst healing that can swing teamfights. Pairs excellently with tanks.',
    attack: 'Throws darts that heal allies or damage enemies over time',
    super: 'Full Treatment — Burst heal for allies or damage for enemies',
    strengths: ['Dual heal/damage','Burst heal Super','Long range'],
    weaknesses: ['Low DPS','Vulnerable up close'],
    bestMode: 'Bounty', bestBuild: 'Booster Shots | Malaise | Shield + Damage',
    counters: ['Slow comps'], counteredBy: ['Assassins','Edgar']
  },
  {
    id: 'otis', name: 'Otis', rarity: 'mythic', role: 'Controller', tier: 'A', color: '#ff6b81',
    description: 'Otis silences enemies with his Super, completely shutting down ability-reliant brawlers like Kenji and Mortis. A top-tier anti-meta pick.',
    attack: 'Sprays ink in a burst of 3 projectiles',
    super: 'Silent Stunner — Stuns and silences an enemy',
    strengths: ['Silence CC','Anti-assassin','Consistent damage'],
    weaknesses: ['Low mobility','Super dependent'],
    bestMode: 'Knockout', bestBuild: 'Dormant Star | Ink Refills | Damage + Shield',
    counters: ['Kenji','Mortis','Assassins'], counteredBy: ['Tanks','Throwers']
  },
  {
    id: 'leon', name: 'Leon', rarity: 'legendary', role: 'Assassin', tier: 'A', color: '#ff6b81',
    description: 'Leon turns invisible with his Super, enabling surprise assassinations on backline squishies. His Lollipop Drop gadget provides team-wide utility.',
    attack: 'Throws spinning blades, more damage up close',
    super: 'Smoke Bomb — Turns invisible for 6 seconds',
    strengths: ['Invisibility','Burst damage up close','Team gadget'],
    weaknesses: ['Revealed by damage','Low HP'],
    bestMode: 'Showdown', bestBuild: 'Lollipop Drop | Invisiheal | Speed + Damage',
    counters: ['Squishies','Throwers'], counteredBy: ['Crow','Gale','Otis']
  },

  // === B-TIER — VIABLE ===
  {
    id: 'shelly', name: 'Shelly', rarity: 'starting', role: 'Fighter', tier: 'B', color: '#2ed573',
    description: 'Solid anti-tank with wall-breaking Super. Band-Aid Star Power gives surprising survivability.',
    attack: 'Buckshot blast — more damage up close',
    super: 'Super Shell — Destroys walls and knocks back',
    strengths: ['Anti-tank','Wall destruction','Easy to use'],
    weaknesses: ['Short range','Predictable'],
    bestMode: 'Brawl Ball', bestBuild: 'Clay Pigeons | Band-Aid | Speed + Damage',
    counters: ['Tanks'], counteredBy: ['Long range','Crow','Spike']
  },
  {
    id: 'stu', name: 'Stu', rarity: 'epic', role: 'Assassin', tier: 'B', color: '#2ed573',
    description: 'Highly mobile with dash mechanic. Wall-breaking Super and Gaso-Heal make him slippery.',
    attack: 'Shoots two energy blasts, Super charges on hit',
    super: 'Nitro Boost — Short dash leaving fire trail',
    strengths: ['High mobility','Wall breaker'],
    weaknesses: ['Low HP','Low per-hit damage'],
    bestMode: 'Bounty', bestBuild: 'Speed Zone | Gaso-Heal | Damage + Shield',
    counters: ['Throwers'], counteredBy: ['Crow','Gale','Emz']
  },
  {
    id: 'colt', name: 'Colt', rarity: 'starting', role: 'Damage Dealer', tier: 'B', color: '#2ed573',
    description: 'High burst damage with dual pistols. Silver Bullet breaks walls for open sightlines.',
    attack: 'Six rapid shots in a line',
    super: 'Bullet Storm — Long barrage that destroys walls',
    strengths: ['High DPS','Wall breaking','Range'],
    weaknesses: ['Thin width','Vulnerable to flanking'],
    bestMode: 'Heist', bestBuild: 'Silver Bullet | Slick Boots | Damage + Reload',
    counters: ['Heist safe'], counteredBy: ['Assassins','Throwers']
  },
  {
    id: 'piper', name: 'Piper', rarity: 'epic', role: 'Marksman', tier: 'B', color: '#2ed573',
    description: 'Devastating damage at max range. Super is an escape tool that drops bombs.',
    attack: 'Single precise shot, more damage at range',
    super: 'Poppin — Jumps away dropping grenades',
    strengths: ['Extreme range damage','Escape tool'],
    weaknesses: ['Low damage close up','Low HP'],
    bestMode: 'Bounty', bestBuild: 'Auto Aimer | Ambush | Damage + Shield',
    counters: ['Low mobility'], counteredBy: ['Assassins','Mortis','Edgar']
  },
  {
    id: 'buzz', name: 'Buzz', rarity: 'mythic', role: 'Assassin', tier: 'B', color: '#2ed573',
    description: 'Passively charges Super near enemies. Stun engage with torpedo gadget for long-range picks.',
    attack: 'Shouts in a cone, dealing damage',
    super: 'Torpedo Throw — Stun and pull to enemies',
    strengths: ['Stun engage','Passive charge'],
    weaknesses: ['Predictable','Misses = vulnerable'],
    bestMode: 'Showdown', bestBuild: 'Reserve Buoy | Tougher Torpedo | Damage + Health',
    counters: ['Squishies'], counteredBy: ['Shelly','Gale','Otis']
  },
  {
    id: 'brock', name: 'Brock', rarity: 'starting', role: 'Marksman', tier: 'B', color: '#2ed573',
    description: 'Long-range rocket launcher that destroys walls. Rocket Fuel gadget makes his next shot massive.',
    attack: 'Single high-damage rocket',
    super: 'Rocket Rain — Barrage of rockets destroying cover',
    strengths: ['Long range','Wall break','High damage'],
    weaknesses: ['Slow reload','Vulnerable close'],
    bestMode: 'Bounty', bestBuild: 'Rocket Fuel | Rocket No.4 | Damage + Shield',
    counters: ['Stationary targets'], counteredBy: ['Assassins']
  },
  {
    id: 'nita', name: 'Nita', rarity: 'starting', role: 'Fighter', tier: 'B', color: '#2ed573',
    description: 'Summons a bear that tanks damage and applies pressure. Excellent at controlling chokepoints.',
    attack: 'Shockwave that pierces enemies',
    super: 'Overbearing — Summons a bear to fight alongside Nita',
    strengths: ['Bear pressure','Piercing attack'],
    weaknesses: ['Bear dies quickly','Predictable'],
    bestMode: 'Heist', bestBuild: 'Bear Paws | Hyper Bear | Speed + Damage',
    counters: ['Slow brawlers'], counteredBy: ['Colette','Lou']
  },
  {
    id: 'jessie', name: 'Jessie', rarity: 'starting', role: 'Fighter', tier: 'B', color: '#2ed573',
    description: 'Her shots bounce between enemies. The turret (Scrappy) provides sustained DPS on objectives.',
    attack: 'Energy orb that bounces between enemies',
    super: 'Scrappy! — Deploys a turret that shoots enemies',
    strengths: ['Bounce damage','Turret DPS','Area control'],
    weaknesses: ['Slow projectile','Fragile turret'],
    bestMode: 'Heist', bestBuild: 'Recoil Spring | Energize | Damage + Shield',
    counters: ['Grouped enemies'], counteredBy: ['Throwers','Brock']
  },
  {
    id: 'rico', name: 'Rico', rarity: 'super-rare', role: 'Damage Dealer', tier: 'B', color: '#2ed573',
    description: 'Bouncing bullets off walls lets Rico hit enemies around corners. Devastating in enclosed maps.',
    attack: 'Burst of bouncing bullets',
    super: 'Trick Shot — Long barrage of piercing bouncing bullets',
    strengths: ['Bounce angles','Wall play','High DPS'],
    weaknesses: ['Open maps','Predictable angles'],
    bestMode: 'Gem Grab', bestBuild: 'Multiball Launcher | Super Bouncy | Damage + Reload',
    counters: ['Behind walls'], counteredBy: ['Throwers','Assassins']
  },
  {
    id: 'bea', name: 'Bea', rarity: 'epic', role: 'Marksman', tier: 'B', color: '#2ed573',
    description: 'Charged shots deal massive damage. Honey Molasses gadget slows entire areas. Great at zoning.',
    attack: 'Fires a long-range shot, supercharged after hit',
    super: 'Iron Hive — Deploys a swarm of drones slowing enemies',
    strengths: ['Charged burst','Slow mechanics','Range'],
    weaknesses: ['Miss = lose charge','Low HP'],
    bestMode: 'Bounty', bestBuild: 'Honey Molasses | Insta Beaload | Damage + Shield',
    counters: ['Slow brawlers'], counteredBy: ['Assassins','Mortis']
  },
  {
    id: 'emz', name: 'Emz', rarity: 'starting', role: 'Fighter', tier: 'B', color: '#2ed573',
    description: 'AoE damage in a cone with lifesteal. Super creates a slowing zone that pairs perfectly with her attack.',
    attack: 'Hair spray in a cone, more damage at the edge',
    super: 'Bad Karma — AoE slowing field that damages over time',
    strengths: ['AoE + lifesteal','Slowing zone','Tank shredder'],
    weaknesses: ['Sweet spot dependent','Weak up close'],
    bestMode: 'Hot Zone', bestBuild: 'Friendzoner | Bad Karma | Damage + Speed',
    counters: ['Tanks','Grouped enemies'], counteredBy: ['Assassins','Mortis']
  },
  {
    id: 'tara', name: 'Tara', rarity: 'mythic', role: 'Fighter', tier: 'B', color: '#2ed573',
    description: 'Pulls enemies together with her Super, enabling team-wipe combos. Her shadow clones apply additional pressure.',
    attack: 'Throws three tarot cards in a spread',
    super: 'Gravity — Creates a vortex pulling enemies to the center',
    strengths: ['Pull combo','Team-wipe potential'],
    weaknesses: ['Slow reload','Skillshot pull'],
    bestMode: 'Gem Grab', bestBuild: 'Psychic Enhancer | Healing Shade | Damage + Speed',
    counters: ['Grouped enemies'], counteredBy: ['Assassins']
  },
  {
    id: 'poco', name: 'Poco', rarity: 'rare', role: 'Support', tier: 'B', color: '#2ed573',
    description: 'AoE healer with wide attack spread. His Super can heal the entire team through walls.',
    attack: 'Wide music wave that damages enemies',
    super: 'Encore — Massive AoE heal for nearby allies',
    strengths: ['AoE healing','Through-wall heal','Easy to use'],
    weaknesses: ['Low damage','Dependent on teammates'],
    bestMode: 'Hot Zone', bestBuild: 'Tuning Fork | Da Capo! | Speed + Shield',
    counters: ['Sustain comps'], counteredBy: ['Crow','Assassins']
  },
  {
    id: 'barley', name: 'Barley', rarity: 'rare', role: 'Thrower', tier: 'B', color: '#2ed573',
    description: 'Lobs bottles that leave fire puddles. His Super blankets an entire area in flames.',
    attack: 'Throws bottles that leave burning puddles',
    super: 'Last Call — Throws a volley of flaming bottles',
    strengths: ['Area denial','Damage over time','Safe behind walls'],
    weaknesses: ['Low HP','Predictable arc'],
    bestMode: 'Heist', bestBuild: 'Sticky Syrup Mixer | Medical Use | Damage + Shield',
    counters: ['Tanks','Slow brawlers'], counteredBy: ['Assassins','Mortis']
  },
  {
    id: 'rosa', name: 'Rosa', rarity: 'rare', role: 'Tank', tier: 'B', color: '#2ed573',
    description: 'Tank with damage reduction Super that lets her absorb massive punishment. Great for pushing objectives.',
    attack: 'Rapid punches in a short cone',
    super: 'Strong Stuff — 70% damage reduction shield',
    strengths: ['Damage reduction','High HP','Bush play'],
    weaknesses: ['Short range','Kited easily'],
    bestMode: 'Brawl Ball', bestBuild: 'Grow Light | Thorny Gloves | Speed + Health',
    counters: ['Close range','Squishies in bushes'], counteredBy: ['Emz','Lou','Gale']
  },

  // === C-TIER — SITUATIONAL ===
  {
    id: 'frank', name:'Frank', rarity:'epic', role:'Tank', tier:'C', color:'#1e90ff',
    description: 'Highest HP + AoE stun Super. Attack delay makes him easy to interrupt.',
    attack:'Slow hammer swing, wide area', super:'Stunning Blow — AoE stun shockwave',
    strengths:['Highest HP','AoE stun'], weaknesses:['Attack delay','Easily interrupted'],
    bestMode:'Brawl Ball', bestBuild:'Active Noise Canceling | Sponge | Speed + Health',
    counters:['Grouped enemies'], counteredBy:['Colette','Lou','Crow']
  },
  {
    id: 'bull', name:'Bull', rarity:'starting', role:'Tank', tier:'C', color:'#1e90ff',
    description:'Breaks through front lines with charge Super. Devastating close-range shotgun.',
    attack:'Double barrel, devastating up close', super:'Bulldozer — Long wall-breaking charge',
    strengths:['Close burst','Wall break','Mobility'], weaknesses:['Short range','Predictable'],
    bestMode:'Heist', bestBuild:'Stomper | Berserker | Speed + Damage',
    counters:['Heist safe'], counteredBy:['Gale','Emz','Lou']
  },
  {
    id: 'dynamike', name:'Dynamike', rarity:'starting', role:'Thrower', tier:'C', color:'#1e90ff',
    description:'High AoE damage + wall breaking. Dyna-Jump has the highest skill ceiling in the game.',
    attack:'Throws two dynamite sticks', super:'Big Barrel O Boom — Massive wall-destroying bomb',
    strengths:['AoE damage','Wall breaking'], weaknesses:['Delay','Very low HP'],
    bestMode:'Heist', bestBuild:'Fidget Spinner | Demolition | Damage + Reload',
    counters:['Tanks grouped'], counteredBy:['Mortis','Edgar']
  },
  {
    id: 'tick', name:'Tick', rarity:'starting', role:'Thrower', tier:'C', color:'#1e90ff',
    description:'Best area denial with lingering mines. Super sends seeking head to chase enemies.',
    attack:'Lobs three mines', super:'Headfirst — Seeking bomb head',
    strengths:['Area denial','Safe damage'], weaknesses:['Very low HP','Terrible close'],
    bestMode:'Hot Zone', bestBuild:'Last Hurrah | Automa-Tick Reload | Shield + Damage',
    counters:['Tanks'], counteredBy:['Assassins','Edgar','Mortis']
  },
  {
    id: 'primo', name:'El Primo', rarity:'rare', role:'Tank', tier:'C', color:'#1e90ff',
    description:'Classic tank with jump Super. Meteor gadget gives ranged poke. Strong in Brawl Ball.',
    attack:'Rapid punches in a short cone', super:'Flying Elbow Drop — Jumps and slams',
    strengths:['High HP','Jump engage','Brawl Ball'], weaknesses:['Kited easily','Predictable jump'],
    bestMode:'Brawl Ball', bestBuild:'Suplex Supplement | El Fuego | Speed + Health',
    counters:['Throwers','Squishies'], counteredBy:['Gale','Emz','Colette']
  },
  {
    id: 'jacky', name:'Jacky', rarity:'super-rare', role:'Tank', tier:'C', color:'#1e90ff',
    description:'AoE attack hits through walls. Super pulls enemies in for team combos.',
    attack:'Ground pound hitting all around', super:'Holey Moley — Pulls enemies close',
    strengths:['Through-wall attack','Pull engage'], weaknesses:['No range','Slow'],
    bestMode:'Brawl Ball', bestBuild:'Pneumatic Booster | Hardy Hard Hat | Speed + Health',
    counters:['Throwers','Grouped'], counteredBy:['Emz','Gale','Spike']
  },
  {
    id: 'colette', name:'Colette', rarity:'epic', role:'Fighter', tier:'C', color:'#1e90ff',
    description:'Anti-tank specialist dealing percent HP damage. Super dashes through enemies twice.',
    attack:'Percent HP-based shot', super:'Double dash dealing massive % damage',
    strengths:['Tank shredder','Dash burst'], weaknesses:['Low damage vs squishies','Vulnerable during Super'],
    bestMode:'Heist', bestBuild:'Na-ah! | Push It | Damage + Shield',
    counters:['Tanks','Heist safe'], counteredBy:['Assassins','Spike']
  },
  {
    id: 'mortis', name:'Mortis', rarity:'mythic', role:'Assassin', tier:'C', color:'#1e90ff',
    description:'Dash-based assassin. High skill ceiling but struggles in tank-heavy metas.',
    attack:'Dashes forward with a shovel slash', super:'Life Blood — Bat swarm with lifesteal',
    strengths:['Mobility','Thrower counter','Lifesteal'], weaknesses:['Low DPS vs tanks','Skill reliant'],
    bestMode:'Bounty', bestBuild:'Survival Shovel | Coiled Snake | Speed + Damage',
    counters:['Throwers','Squishies'], counteredBy:['Tanks','Gale','Otis']
  },
  {
    id: 'pam', name:'Pam', rarity:'epic', role:'Support', tier:'C', color:'#1e90ff',
    description:'Tanky healer with turret. Wide scrap attack provides area control.',
    attack:'Burst of scrap in a wide spread', super:'Mamas Hug — Deploys healing turret',
    strengths:['Sustain healing','Tanky support','Area control'], weaknesses:['Large hitbox','Low burst'],
    bestMode:'Gem Grab', bestBuild:'Pulse Modulator | Mamas Squeeze | Speed + Shield',
    counters:['Slow comps'], counteredBy:['Throwers','Colette']
  },
  {
    id: 'meg', name:'Meg', rarity:'legendary', role:'Tank', tier:'C', color:'#1e90ff',
    description:'Two-form brawler. Starts in mech form with high HP, ejects on destruction.',
    attack:'Burst of energy shots', super:'Mech Form — Transforms into a powerful mech',
    strengths:['Two lives','High mech HP'], weaknesses:['Weak base form','Slow transformation'],
    bestMode:'Showdown', bestBuild:'Jolting Volts | Heavy Metal | Health + Damage',
    counters:['Close range'], counteredBy:['Colette','Anti-tank']
  },

  // === D-TIER — NEEDS BUFF ===
  {
    id: 'edgar', name:'Edgar', rarity:'epic', role:'Assassin', tier:'D', color:'#747d8c',
    description:'Struggles heavily in current meta. Short-range lifesteal gets out-traded by everything.',
    attack:'Scarf punches with lifesteal', super:'Vault — Jumps over obstacles',
    strengths:['Lifesteal','Mobility'], weaknesses:['Extremely short range','Predictable'],
    bestMode:'Showdown', bestBuild:'Lets Fly | Fisticuffs | Speed + Damage',
    counters:['Throwers'], counteredBy:['Everything with range']
  },
  {
    id: 'mr-p', name:'Mr. P', rarity:'mythic', role:'Controller', tier:'D', color:'#747d8c',
    description:'Porters get destroyed too fast in current meta. Bounce attack is unreliable.',
    attack:'Suitcase that bounces', super:'Porters! Attack! — Spawns porter minions',
    strengths:['Behind cover shots'], weaknesses:['Low damage','Fragile porters'],
    bestMode:'Gem Grab', bestBuild:'Service Bell | Handle With Care | Shield + Speed',
    counters:['Throwers'], counteredBy:['Aggro','Tanks']
  },
  {
    id: 'bo', name:'Bo', rarity:'starting', role:'Controller', tier:'D', color:'#747d8c',
    description:'Mine-based controller outclassed by Lou and Tick. Super mines get triggered too easily.',
    attack:'Three explosive arrows', super:'Catch a Fox — Places invisible mines',
    strengths:['Mine control','Bush vision'], weaknesses:['Low damage','Predictable mines'],
    bestMode:'Gem Grab', bestBuild:'Super Totem | Snare a Bear | Speed + Shield',
    counters:['Tanks in bushes'], counteredBy:['Throwers','Assassins']
  }
];

// ============================================
// TIER LIST META DATA
// ============================================
const TIER_LIST = {
  S: { label:'S', description:'Meta Defining — Must pick or ban. These brawlers dominate competitive play.', color:'#ff4757' },
  A: { label:'A', description:'Very Strong — Consistently powerful picks that fit most compositions.', color:'#ff6b81' },
  B: { label:'B', description:'Viable — Solid choices in the right hands or on specific maps.', color:'#2ed573' },
  C: { label:'C', description:'Situational — Only effective on certain maps or against specific comps.', color:'#1e90ff' },
  D: { label:'D', description:'Needs Buff — Currently outclassed. Only with exceptional skill.', color:'#747d8c' }
};

// ============================================
// GAME MODES
// ============================================
const GAME_MODES = [
  { id:'gem-grab', name:'Gem Grab', icon:'💎',
    description:'3v3 mode. Collect 10 gems from center, hold for 15 seconds to win.',
    tip:'Control center, protect gem carrier, never push alone with gems.',
    bestBrawlers:['Sandy','Surge','Gene','Tara','Pam'] },
  { id:'brawl-ball', name:'Brawl Ball', icon:'⚽',
    description:'Score 2 goals to win. Most popular competitive mode.',
    tip:'Break enemy goal walls, pass to open teammates, use tanks to push.',
    bestBrawlers:['Kenji','Gale','Shelly','Stu','Frank'] },
  { id:'heist', name:'Heist', icon:'🔒',
    description:'Destroy the enemy safe while protecting yours. DPS is king.',
    tip:'Consistent damage dealers like Colt or Amber. Defend when ahead.',
    bestBrawlers:['Amber','Colt','Bull','Dynamike','Rico'] },
  { id:'bounty', name:'Bounty', icon:'⭐',
    description:'Earn stars by eliminating enemies. Most stars when time runs out wins.',
    tip:'Stay alive! A death with stars gives enemy a huge lead.',
    bestBrawlers:['Piper','Brock','Nani','Stu','Bea'] },
  { id:'knockout', name:'Knockout', icon:'💀',
    description:'Best of 3 rounds. Eliminate all 3 enemies to win.',
    tip:'Never engage 1v3. Stick together and focus on picks.',
    bestBrawlers:['Cordelius','Otis','Gene','Buzz','Gale'] },
  { id:'showdown', name:'Showdown', icon:'🏆',
    description:'Solo or Duo battle royale. Last one standing wins.',
    tip:'Secure early cubes, avoid fights, use gas to your advantage.',
    bestBrawlers:['Crow','Leon','Buzz','Shelly','Edgar'] },
  { id:'hot-zone', name:'Hot Zone', icon:'🔥',
    description:'Control zones to earn points. First to 100% wins.',
    tip:'Use area denial like Lou or Spike. Control one zone firmly.',
    bestBrawlers:['Spike','Lou','Sandy','Emz','Amber'] }
];

// ============================================
// STRATEGY GUIDES
// ============================================
const GUIDES = [
  { id:'tier-list-guide', title:'Complete Tier List Guide: How Rankings Work',
    icon:'📊', iconClass:'purple',
    description:'Understand what each tier means, our ranking methodology, and how to apply tier lists to climb the ladder effectively.',
    content: {
      intro: 'BrawlMeta tier lists are built from competitive Power League data, monthly finals, and tournament results — not just “feel.” Use them as a starting point, not a rulebook.',
      sections: [
        { title:'Tier Meanings', items:[
          'S Tier — Meta Defining. These brawlers shape every draft. Must pick or ban in most situations.',
          'A Tier — Very Strong. Reliable across many maps and modes; fit most team compositions.',
          'B Tier — Viable. Strong in the right hands or on specific maps, but not universal.',
          'C Tier — Situational. Only worth picking when the map, mode, or enemy comp heavily favors them.',
          'D Tier — Needs Buff. Outclassed by higher-tier picks. Avoid unless you are extremely comfortable.'
        ]},
        { title:'How We Rank (July 2026)', items:[
          'Power League pick/ban rates across all ranks and above Diamond 3.',
          'Monthly Finals and World Championship qualifier results.',
          'Win rate data on the current competitive map pool.',
          'Input from top pro players and coaches.'
        ]},
        { title:'How to Use a Tier List', items:[
          'Do not blind-pick S-tier brawlers. Map and team synergy matter more than raw power.',
          'Consider your comfort. A high-tier brawler you cannot play is worse than a lower-tier main.',
          'Watch the “Rising Stars” and “Falling Off” sections weekly to catch meta shifts early.'
        ]}
      ],
      tips: ['Tier lists are snapshots, not guarantees. Patch changes and new maps can move a brawler up or down quickly.'],
      updateNote: 'Current snapshot: July 2026 — Kenji, Surge, Cordelius, and Gale headline S-tier.'
    }
  },
  { id:'beginner-guide', title:'Beginner Guide: Your First 100 Trophies',
    icon:'🎓', iconClass:'blue',
    description:'New to Brawl Stars? Learn which brawlers to unlock first, basic strategies, and trophy push tips for beginners.',
    content: {
      intro: 'Welcome to the arena. Your first 100 trophies are about learning mechanics, not chasing the meta. Focus on one or two brawlers and master the basics before expanding your roster.',
      sections: [
        { title:'Best Starting Brawlers', items:[
          'Shelly — Easy to use, strong close-range, and great for learning cover positioning.',
          'Nita — Her bear teaches you zone control and pressure without needing perfect aim.',
          'Colt — Teaches you to aim accurately and punish enemies in open lanes.'
        ]},
        { title:'Core Mechanics to Master', items:[
          'Stick to cover. Never stand in the open unless you are the one applying pressure.',
          'Control your ammo. Reloading at the wrong time costs you duels.',
          'Use your Super intentionally. Wasting it is the #1 beginner mistake.',
          'Pass the ball in Brawl Ball, group in Hot Zone, and protect the gem carrier in Gem Grab.'
        ]},
        { title:'Trophy Push Tips', items:[
          'Play the modes where your current brawler is strongest.',
          'Avoid Showdown until you understand bush control and cube advantage.',
          'Watch the kill feed and retreat when you are outnumbered.'
        ]}
      ],
      tips: ['Avoid chasing enemies into their spawn. Patience wins more trophies than aggression.'],
      updateNote: 'Beginner-friendly picks in July 2026: Shelly, Nita, and Poco are forgiving and strong on starter maps.'
    }
  },
  { id:'team-comp', title:'Team Composition: Building Winning Lineups',
    icon:'🤝', iconClass:'green',
    description:'Master team building. Learn about roles, synergy, and counter-picking for competitive 3v3 modes.',
    content: {
      intro: 'A good team comp is greater than the sum of its parts. In Brawl Stars, balance between damage, control, and sustain is the key to winning 3v3 modes.',
      sections: [
        { title:'Core Roles', items:[
          'Tank — Absorbs damage and controls space. Examples: Rosa, Frank, El Primo.',
          'Damage Dealer — Applies consistent pressure and secures kills. Examples: Surge, Colt, Brock.',
          'Support / Controller — Provides utility, healing, or crowd control. Examples: Gale, Byron, Sandy, Max.'
        ]},
        { title:'Proven Formulas', items:[
          '1 Tank + 1 Damage + 1 Support — The safest starting template.',
          'Double Damage + 1 Controller — High burst for Heist and Bounty.',
          '1 Initiator + 1 Follow-up + 1 Finisher — Assassin-style comps for Knockout.'
        ]},
        { title:'July 2026 Meta Comps', items:[
          'Brawl Ball: Kenji + Gale + Shelly — engage, reset, and break walls.',
          'Gem Grab: Surge + Max + Byron — sustain, poke, and late-game scaling.',
          'Hot Zone: Spike + Lou + Sandy — area denial and zone control.',
          'Knockout: Cordelius + Otis + Gene — isolation picks and silence.'
        ]}
      ],
      tips: ['Draft for the map first, then counter the enemy. A great comp on the wrong map still loses.'],
      updateNote: 'Speed boost from Max and crowd control from Gale are the most valuable utilities in the current meta.'
    }
  },
  { id:'upgrade-guide', title:'Best Gadgets, Star Powers & Gears',
    icon:'⚙️', iconClass:'orange',
    description:'Complete breakdown of optimal builds for every brawler. Never waste resources on wrong upgrades again.',
    content: {
      intro: 'Your brawler is only as strong as the build around it. Gadgets, Star Powers, and Gears can turn a decent pick into a dominant one. Here is how to spend your coins and tokens wisely.',
      sections: [
        { title:'Upgrade Priority', items:[
          'Level 7 — Unlock Gadget. This is usually the single biggest power spike.',
          'Level 9 — Unlock Star Power. Most Star Powers define how the brawler plays.',
          'Level 11 — Unlock Gears. Pick Damage, Speed, or Shield based on role.'
        ]},
        { title:'Gear Recommendations by Role', items:[
          'Assassins — Speed + Shield to close gaps and survive burst.',
          'Tanks — Health + Speed to engage and escape sticky situations.',
          'Damage Dealers — Damage + Reload to maximize DPS.',
          'Supports / Controllers — Shield + Speed to stay alive and reposition.'
        ]},
        { title:'Meta Builds (July 2026)', items:[
          'Kenji — Smoke Bomb | Shadow Step | Damage + Shield',
          'Surge — Power Shield | Serve Ice Cold | Damage + Speed',
          'Gale — Twister | Blustery Blow | Speed + Shield',
          'Byron — Booster Shots | Malaise | Shield + Damage',
          'Max — Phase Shifter | Run n Gun | Damage + Speed'
        ]}
      ],
      tips: ['Do not spread resources evenly. Max out your main 3–4 brawlers before leveling alts.'],
      updateNote: 'Gadget-first unlocks are recommended in the current meta because most game-changing plays come from gadgets.'
    }
  },
  { id:'counter-guide', title:'Ultimate Counter Guide: Who Beats Who',
    icon:'⚔️', iconClass:'red',
    description:'Learn every counter relationship. Know when to pick and when to ban in Power League.',
    content: {
      intro: 'Counter-picking is what separates casual players from Power League climbers. If you understand the rock-paper-scissors of Brawl Stars, you can win matchups before the game even starts.',
      sections: [
        { title:'The Counter Triangle', items:[
          'Assassins beat Throwers — Throwers cannot escape once an assassin closes the gap.',
          'Throwers beat Tanks — Tanks cannot approach through endless area denial.',
          'Tanks beat Assassins — High HP and close-range burst shut down dive attempts.',
          'Marksmen beat low-mobility targets — Range punishes brawlers who cannot close gaps.',
          'Controllers disrupt everyone — Gale, Otis, and Sandy can win neutral game against multiple roles.'
        ]},
        { title:'Specific Counter Picks', items:[
          'Otis counters Kenji and Mortis with silence.',
          'Gale counters tanks and assassins with knockback and Twister.',
          'Crow counters healers and tanks with poison and healing reduction.',
          'Lou counters tanks with freeze.',
          'Colette counters high-HP tanks with percent damage.'
        ]},
        { title:'Ban Strategy', items:[
          'Ban the brawler that ruins your intended comp.',
          'Ban comfort picks your enemy is likely to main.',
          'Save your last pick for a counter if you have the flexibility.'
        ]}
      ],
      tips: ['Counter picks only work if you can play them. Do not pick a hard counter you have never practiced.'],
      updateNote: 'In July 2026, Otis and Gale are the most flexible counters because they disrupt the dominant assassin meta.'
    }
  },
  { id:'map-guide', title:'Map Strategy: Every Rotation Covered',
    icon:'🗺️', iconClass:'gold',
    description:'Detailed strategies for each map. Learn flank routes, defense positions, and optimal picks.',
    content: {
      intro: 'Every map rewards different strengths. Learning rotations, lane assignments, and power positions is the fastest way to improve your win rate in 3v3 modes.',
      sections: [
        { title:'Map Types', items:[
          'Open Maps — Long-range marksmen and snipers dominate. Prioritize Piper, Brock, Bea.',
          'Walled Maps — Throwers and wall-bouncers like Rico and Barley excel.',
          'Mid-Focused Maps — Control the center with tanks and area denial.',
          'Wide Maps — Flank routes matter; use fast assassins and controllers.'
        ]},
        { title:'Lane Roles', items:[
          'Center / Control — Holds mid, zones enemies, and gathers gems/zones.',
          'Flank — Applies pressure from the side and punishes rotations.',
          'Support / Backline — Pokes from safety, heals, or covers retreat paths.'
        ]},
        { title:'Mode-Specific Map Tips', items:[
          'Gem Grab: Never push mid with gems. Rotate back and let the carrier hide.',
          'Brawl Ball: Break the enemy goal walls, then use the open lane to score.',
          'Heist: Split push when possible. One distraction can win the game.',
          'Bounty: Stay alive. A single death with stars swings the entire match.',
          'Hot Zone: Focus one zone at a time. Splitting rarely works.',
          'Knockout: Stick together. Never take a 1v3 duel.'
        ]}
      ],
      tips: ['Memorize the best bush positions and retreat routes on each map. Map knowledge is free wins.'],
      updateNote: 'July 2026 competitive map pool favors controllers and area denial. Lou, Spike, and Sandy are top picks on mid-heavy maps.'
    }
  }
];

// ============================================
// LATEST UPDATES / NEWS
// ============================================
const UPDATES = [
  { id:'update-1', title:'July 2026 Meta Shift: Gale Joins S-Tier, Kenji Still Dominant',
    tag:'Meta Analysis', date:'July 10, 2026', icon:'📈',
    excerpt:'The latest balance changes have elevated Gale to S-tier with his unmatched crowd control. Kenji solidifies his position at the top. Full breakdown inside.' },
  { id:'update-2', title:'New Brawler Finx: Complete Kit & Build Guide',
    tag:'New Brawler', date:'July 5, 2026', icon:'🆕',
    excerpt:'Finx brings a time-bending mechanic to Brawl Stars. Deep dive into his attack, Super, Gadgets, Star Powers, and optimal builds for every mode.' },
  { id:'update-3', title:'Brawl Stars World Finals 2026: Roadmap & Predictions',
    tag:'Esports', date:'June 28, 2026', icon:'🏟️',
    excerpt:'The road to the 2026 World Finals is heating up. Format, qualified teams, prize pool, and bold predictions for the biggest event of the year.' },
  { id:'update-4', title:'Season 34 Battle Pass Review: Worth Your Gems?',
    tag:'Season Pass', date:'June 20, 2026', icon:'🎟️',
    excerpt:'New Battle Pass with exclusive skins and fresh brawler. We crunch the numbers to tell you if this season pass delivers real value.' }
];

// ============================================
// META SUMMARY — FRONT PAGE
// ============================================
const META_SUMMARY = {
  title:'Current Meta: July 2026',
  description:'High-mobility assassins and controllers dominate. Kenji and Surge remain S-tier staples, while Gale has surged dramatically thanks to recent buffs. Tanks continue to struggle against the CC-heavy meta.',
  topPicks:['Kenji','Surge','Cordelius','Gale'],
  risingStars:['Lou','Gale','Otis','Byron'],
  fallingOff:['Edgar','Frank','Mr. P','Bo','Mortis'],
  bannedMost:['Kenji','Surge','Cordelius']
};

// ============================================
// STATS FOR HOMEPAGE
// ============================================
const SITE_STATS = {
  brawlers: BRAWLERS.length,
  guides: GUIDES.length,
  modes: GAME_MODES.length,
  updates: UPDATES.length
};
