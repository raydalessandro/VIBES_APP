import React, { useState } from 'react';
import { 
  Home, Music, Users, MapPin, Phone, Instagram, Clock,
  Heart, X, ChevronRight, Menu, Award, Play, ArrowLeft,
  Mic2, Headphones, Settings, FileText, TrendingUp,
  Calendar, Radio, MessageCircle, Eye, Share2, Download,
  Zap, Target, Sparkles, Check, AlertCircle, Send
} from 'lucide-react';

export default function VibesStudioApp() {
  const [currentSpace, setCurrentSpace] = useState('home');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [likedArtists, setLikedArtists] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showPortalAnimation, setShowPortalAnimation] = useState(false);

  const studioInfo = {
    name: "Vibes Studio",
    tagline: "PONTE MILANO-USA • HIP HOP PROFESSIONALE",
    location: "Milano, Baggio",
    phone: "+39 346 308 6154",
    instagram: "@v.ibes.studio",
    stats: { artists: "50+", releases: "120+", sessions: "1000+", awards: "12" }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Come registrare trap professionale: setup e tecnica",
      excerpt: "Dalla scelta del mic alla catena analogica. Tutto quello che serve per un sound competitivo.",
      author: "Marco Vibe",
      date: "15 Gen 2025",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400",
      readTime: "8 min",
      likes: 234,
      comments: 45,
      featured: true
    },
    {
      id: 2,
      title: "Behind the scenes: sessione con MC Shadow",
      excerpt: "24 ore in studio per registrare 'Ombre Notturne'. Il processo creativo dall'idea al master.",
      author: "Giulia Mix",
      date: "10 Gen 2025",
      category: "Behind The Scenes",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=400",
      readTime: "5 min",
      likes: 456,
      comments: 67,
      featured: true
    },
    {
      id: 3,
      title: "Mixing drill: i segreti dell'808 UK",
      excerpt: "Come ottenere il suono drill UK autentico. EQ, compressione, sidechain e saturazione.",
      author: "Alex Beat",
      date: "5 Gen 2025",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=400",
      readTime: "12 min",
      likes: 389,
      comments: 92,
      featured: false
    },
    {
      id: 4,
      title: "Artist spotlight: Luna Beats e l'R&B italiano",
      excerpt: "Intervista alla voce soul del roster Vibes. Dal background alla firma con l'etichetta.",
      author: "Marco Vibe",
      date: "1 Gen 2025",
      category: "Artist Story",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=400",
      readTime: "6 min",
      likes: 512,
      comments: 78,
      featured: false
    }
  ];

  const releases = [
    {
      id: 1,
      title: "Ombre Notturne",
      artist: "MC Shadow",
      type: "Single",
      releaseDate: "20 Dic 2024",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
      streams: 234567,
      spotifyUrl: "https://open.spotify.com",
      appleMusicUrl: "https://music.apple.com"
    },
    {
      id: 2,
      title: "Notte Stellata EP",
      artist: "Luna Beats",
      type: "EP",
      releaseDate: "15 Dic 2024",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
      streams: 456789,
      spotifyUrl: "https://open.spotify.com",
      appleMusicUrl: "https://music.apple.com"
    },
    {
      id: 3,
      title: "Torino Drill",
      artist: "Dark Bass",
      type: "Single",
      releaseDate: "10 Dic 2024",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      streams: 678901,
      spotifyUrl: "https://open.spotify.com",
      appleMusicUrl: "https://music.apple.com"
    },
    {
      id: 4,
      title: "Milano 2077",
      artist: "Synth Wave",
      type: "Album",
      releaseDate: "1 Dic 2024",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
      streams: 892345,
      spotifyUrl: "https://open.spotify.com",
      appleMusicUrl: "https://music.apple.com"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Live Session: MC Shadow & Dark Bass",
      date: "25 Gen 2025",
      time: "21:00",
      type: "Live Performance",
      location: "Vibes Studio",
      capacity: 50,
      price: "€15",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400",
      description: "Serata esclusiva in studio con due pesi massimi del roster.",
      soldOut: false
    },
    {
      id: 2,
      title: "Workshop: Mixing Trap con Giulia Mix",
      date: "2 Feb 2025",
      time: "15:00",
      type: "Workshop",
      location: "Vibes Studio",
      capacity: 15,
      price: "€80",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=400",
      description: "4 ore hands-on: dalla traccia grezza al master competitivo.",
      soldOut: false
    },
    {
      id: 3,
      title: "Masterclass: Produzione Beat con Alex Beat",
      date: "10 Feb 2025",
      time: "14:00",
      type: "Masterclass",
      location: "Vibes Studio",
      capacity: 12,
      price: "€120",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=400",
      description: "Dai sample agli 808: workflow completo di un beat da zero.",
      soldOut: true
    }
  ];

  const services = [
    {
      id: 1,
      name: "Registrazione Professionale",
      price: "Da €80/ora",
      description: "Studio A/B con Neumann, Avalon, Apollo. Sound USA garantito.",
      features: ["Booth isolata", "Neumann U87", "Avalon 737", "Apollo interface", "Producer assistenza"],
      icon: Mic2,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 2,
      name: "Produzione Beat",
      price: "Da €200/beat",
      description: "Beat custom 808-driven. Trap, drill, boom bap su misura.",
      features: ["Beat originale", "Stems inclusi", "2 revisioni", "Trackout opzionale", "Exclusive rights"],
      icon: Headphones,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 3,
      name: "Mixing & Mastering",
      price: "€150 mix + €80 master",
      description: "Il tuo suono competitivo con le major. Loudness e clarity pro.",
      features: ["Analog processing", "Stem mastering", "Revisioni illimitate", "Pro tools HD", "Delivery streaming-ready"],
      icon: Settings,
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 4,
      name: "Songwriting & Feat",
      price: "Da €300",
      description: "Ghostwriting, toplining, featuring con artisti roster.",
      features: ["Lyrics custom", "Melodie/hook", "Demo vocalist", "Featuring roster", "Royalties split"],
      icon: FileText,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      name: "Distribuzione Digitale",
      price: "€50 + 15% royalties",
      description: "Vibes Records pubblica il tuo progetto su tutti gli store.",
      features: ["Spotify, Apple, etc", "ISRC/UPC codes", "Playlist pitching", "Promo social", "Royalties reporting"],
      icon: TrendingUp,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 6,
      name: "Video Production",
      price: "Da €800",
      description: "Video clip, lyric video, contenuti social pro.",
      features: ["Regia completa", "Location Milano", "Editing avanzato", "Color grading", "Delivery multi-format"],
      icon: Play,
      color: "from-red-600 to-orange-600"
    }
  ];

  const epPackage = {
    name: "EP PACKAGE - All Inclusive",
    price: "€1.500",
    description: "Pacchetto completo per il tuo primo EP professionale.",
    includes: [
      "3 beat originali custom",
      "3 sessioni registrazione (3h cad)",
      "3 mix + 3 master professionali",
      "1 featuring roster Vibes",
      "Distribuzione digitale inclusa",
      "Artwork EP professionale",
      "Promo social 30 giorni",
      "1 lyric video",
      "Playlist pitching Spotify"
    ]
  };

  const artists = [
    {
      id: 1,
      name: "MC Shadow",
      genre: "Trap/Drill",
      city: "Milano",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400",
      bio: "Voice del sottobosco milanese. Trap oscura e testi taglienti.",
      stats: { streams: "2.5M", releases: 12, followers: "45K" },
      topTracks: ["Ombre Notturne", "Milano Sud", "Trap Talk"],
      achievements: ["#1 iTunes Hip Hop", "Spotify Editorial", "Red Bull 64 Bars"]
    },
    {
      id: 2,
      name: "Luna Beats",
      genre: "R&B/Soul",
      city: "Roma",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      bio: "Voce velluto e produzioni minimal. R&B contemporaneo italiano.",
      stats: { streams: "1.8M", releases: 8, followers: "32K" },
      topTracks: ["Notte Stellata", "Velvet", "Respiro"],
      achievements: ["Spotify Fresh Finds", "Radio Deejay", "MTV New Gen"]
    },
    {
      id: 3,
      name: "Dark Bass",
      genre: "Drill",
      city: "Torino",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      bio: "Drill UK-style nel sangue. Flow letale, 808 devastanti.",
      stats: { streams: "3.2M", releases: 15, followers: "58K" },
      topTracks: ["Torino Drill", "Opps", "Midnight"],
      achievements: ["YouTube 1M views", "UK Drill Italia", "Sold out TO"]
    },
    {
      id: 4,
      name: "Synth Wave",
      genre: "Electronic/Hip Hop",
      city: "Milano",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Producer visionario. Synth retrofuturistici e 808 moderne.",
      stats: { streams: "4.1M", releases: 25, followers: "67K" },
      topTracks: ["Neon Dreams", "Future Bass", "Milano 2077"],
      achievements: ["Beatport Top 10", "Boiler Room", "Red Bull Studios"]
    }
  ];

  const VibesLogo = ({ size = 'md' }) => {
    const sizeClasses = {
      sm: 'text-xl',
      md: 'text-3xl',
      lg: 'text-5xl',
      xl: 'text-6xl'
    };
    
    const barSizes = {
      sm: 'w-1 h-4',
      md: 'w-1.5 h-6',
      lg: 'w-2 h-10',
      xl: 'w-3 h-16'
    };
    
    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-1 items-end">
          <div className={barSizes[size] + ' bg-gradient-to-t from-orange-700 to-orange-500'}></div>
          <div className={barSizes[size] + ' bg-gradient-to-t from-orange-600 to-orange-400'}></div>
          <div className={barSizes[size] + ' bg-gradient-to-t from-orange-500 to-orange-300'}></div>
        </div>
        <span className={sizeClasses[size] + ' font-black tracking-tighter text-white'}>VIBES</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 bg-black border-b border-white/10 z-40">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setShowMenu(true)}>
            <Menu className="w-6 h-6 text-white" />
          </button>
          <VibesLogo size="sm" />
          <div className="w-6"></div>
        </div>
      </header>

      <main className="pt-16 pb-32">
        {currentSpace === 'home' ? (
          <>
            {activeSection === 'hero' && (
          <div className="pb-4">
            <div className="relative h-72 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
              <div className="relative h-full flex flex-col justify-center items-center text-white p-6 text-center">
                <VibesLogo size="xl" />
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-bold tracking-wider text-orange-500">STUDIO</p>
                  <p className="text-xs tracking-widest uppercase opacity-90">Milano Baggio • Est. 2023</p>
                </div>
                <p className="text-sm opacity-80 max-w-md mt-4">{studioInfo.tagline}</p>
              </div>
            </div>

            <div className="bg-black text-white border-y border-gray-800">
              <div className="grid grid-cols-4 divide-x divide-gray-800">
                {Object.entries(studioInfo.stats).map(([key, value]) => (
                  <div key={key} className="p-4 text-center">
                    <div className="text-xl font-bold text-orange-500">{value}</div>
                    <div className="text-xs uppercase opacity-70 mt-1">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-b from-gray-900 to-black text-white">
              <h2 className="text-sm font-bold uppercase mb-4 text-orange-500">LA STORIA</h2>
              <p className="text-sm opacity-90 mb-6">
                Studio di registrazione professionale e casa discografica indie. 
                Portiamo il suono dell'hip hop americano (Atlanta, LA, NYC) nel cuore di Milano.
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white/5 rounded-sm p-3 border border-white/10">
                  <div className="font-bold uppercase mb-1">Sound</div>
                  <div className="opacity-70">Atlanta • LA • NYC</div>
                </div>
                <div className="bg-white/5 rounded-sm p-3 border border-white/10">
                  <div className="font-bold uppercase mb-1">Gear</div>
                  <div className="opacity-70">Neumann • Avalon • Apollo</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-600 to-orange-800 text-white text-center">
              <h3 className="font-bold text-lg uppercase mb-2">PRONTO A REGISTRARE?</h3>
              <p className="text-sm opacity-90 mb-4">Prenota la tua sessione in studio</p>
              <button className="bg-black text-white px-8 py-3 rounded-sm font-bold text-sm uppercase">
                PRENOTA ORA
              </button>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="p-4 pb-20 bg-black text-white">
            <h2 className="text-sm font-bold uppercase mb-4 text-orange-500 px-2">SERVIZI STUDIO</h2>
            
            {/* EP Package Featured */}
            <div className="mb-6 bg-gradient-to-br from-orange-600 to-orange-800 rounded-sm p-5 border-2 border-orange-400">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs font-bold uppercase text-orange-200 mb-1">FEATURED</div>
                  <h3 className="text-lg font-black uppercase">{epPackage.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{epPackage.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black">{epPackage.price}</div>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                {epPackage.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-black text-white py-3 rounded-sm font-bold text-sm uppercase mt-4">
                INFO & BOOKING
              </button>
            </div>

            {/* Services List */}
            <div className="space-y-3">
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-white/5 rounded-sm p-4 border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={'w-10 h-10 rounded-sm bg-gradient-to-br ' + service.color + ' flex items-center justify-center flex-shrink-0'}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm uppercase">{service.name}</h3>
                        <p className="text-orange-500 text-sm font-bold mt-0.5">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mb-3">{service.description}</p>
                    <div className="space-y-1 text-xs opacity-70">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSection === 'artists' && (
          <div className="pb-20 bg-black text-white">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-sm font-bold uppercase text-orange-500 mb-2">ROSTER VIBES RECORDS</h2>
              <p className="text-xs opacity-70">{artists.length} artisti firmati</p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3">
              {artists.map(artist => (
                <div 
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-square bg-gray-900 rounded-sm overflow-hidden mb-2 relative">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const newLikes = new Set(likedArtists);
                        if (newLikes.has(artist.id)) {
                          newLikes.delete(artist.id);
                        } else {
                          newLikes.add(artist.id);
                        }
                        setLikedArtists(newLikes);
                      }}
                      className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                    >
                      <Heart className={likedArtists.has(artist.id) ? 'w-4 h-4 fill-orange-500 text-orange-500' : 'w-4 h-4 text-white'} />
                    </button>
                  </div>
                  <h3 className="font-bold text-sm uppercase">{artist.name}</h3>
                  <p className="text-xs text-orange-500">{artist.genre}</p>
                  <p className="text-xs opacity-50">{artist.city}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'info' && (
          <div className="pb-20 bg-black text-white">
            <div className="p-4 space-y-3">
              <div className="bg-white/5 rounded-sm p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-xs uppercase font-bold opacity-50">Location</div>
                    <div className="font-bold">{studioInfo.location}</div>
                  </div>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 rounded-sm text-sm font-bold uppercase">
                  APRI IN MAPS
                </button>
              </div>

              <div className="bg-white/5 rounded-sm p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-xs uppercase font-bold opacity-50">Contatti</div>
                    <div className="font-bold">Chiamaci o scrivi</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={'tel:' + studioInfo.phone} className="flex items-center justify-between bg-white/5 p-3 rounded-sm">
                    <span className="text-sm">Telefono</span>
                    <span className="text-sm font-bold">{studioInfo.phone}</span>
                  </a>
                  <a href={'https://wa.me/' + studioInfo.phone.replace(/\D/g, '')} className="flex items-center justify-between bg-green-600 p-3 rounded-sm">
                    <span className="text-sm font-bold">WhatsApp</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-sm p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Instagram className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-xs uppercase font-bold">Seguici</div>
                    <div className="font-bold">{studioInfo.instagram}</div>
                  </div>
                </div>
                <button className="w-full bg-white text-purple-600 py-2 rounded-sm text-sm font-bold uppercase">
                  APRI INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        )}
        </>
        ) : (
          <>
            {/* LABEL SPACE - BLOG */}
            {activeSection === 'blog' && (
              <div className="pb-2 bg-black text-white">
                <div className="p-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" />
                    <h2 className="text-xs font-bold uppercase text-orange-500">BLOG</h2>
                  </div>
                  <span className="text-[10px] opacity-50">Tutorial • Stories</span>
                </div>

                <div className="p-3 space-y-2">
                  {blogPosts.map(post => (
                    <div 
                      key={post.id}
                      onClick={() => setSelectedBlogPost(post)}
                      className="cursor-pointer bg-white/5 rounded overflow-hidden border border-white/10"
                    >
                      <div className="aspect-video bg-gray-900 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        {post.featured && (
                          <div className="absolute top-1.5 left-1.5 bg-orange-500 text-black px-1.5 py-0.5 rounded text-[9px] font-bold">
                            FEATURED
                          </div>
                        )}
                        <div className="absolute top-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[9px]">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-2.5">
                        <h3 className="font-bold text-xs mb-1 leading-tight">{post.title}</h3>
                        <p className="text-[10px] opacity-70 mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-[9px] opacity-50">
                          <span>{post.author} • {post.date}</span>
                          <div className="flex items-center gap-2">
                            <span>{post.readTime}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                const newLikes = new Set(likedPosts);
                                if (newLikes.has(post.id)) {
                                  newLikes.delete(post.id);
                                } else {
                                  newLikes.add(post.id);
                                }
                                setLikedPosts(newLikes);
                              }}
                              className="flex items-center gap-0.5"
                            >
                              <Heart className={likedPosts.has(post.id) ? 'w-2.5 h-2.5 fill-orange-500 text-orange-500' : 'w-2.5 h-2.5'} />
                              {post.likes}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LABEL SPACE - RELEASES */}
            {activeSection === 'releases' && (
              <div className="pb-2 bg-black text-white">
                <div className="p-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    <h2 className="text-xs font-bold uppercase text-orange-500">CATALOG</h2>
                  </div>
                  <span className="text-[10px] opacity-50">{releases.length} uscite</span>
                </div>

                <div className="p-3 grid grid-cols-2 gap-2">
                  {releases.map(release => (
                    <div 
                      key={release.id}
                      onClick={() => setSelectedRelease(release)}
                      className="cursor-pointer"
                    >
                      <div className="aspect-square bg-gray-900 rounded overflow-hidden mb-1.5 relative group">
                        <img src={release.cover} alt={release.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute top-1.5 left-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold">
                          {release.type}
                        </div>
                      </div>
                      <h3 className="font-bold text-xs leading-tight">{release.title}</h3>
                      <p className="text-[10px] text-orange-500 mb-0.5">{release.artist}</p>
                      <div className="flex items-center gap-1 text-[9px] opacity-50">
                        <Play className="w-2.5 h-2.5" />
                        {(release.streams / 1000).toFixed(0)}K
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LABEL SPACE - EVENTS */}
            {activeSection === 'events' && (
              <div className="pb-2 bg-black text-white">
                <div className="p-3 border-b border-white/10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <h2 className="text-xs font-bold uppercase text-orange-500">EVENTI</h2>
                </div>

                <div className="p-3 space-y-2">
                  {events.map(event => (
                    <div 
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="cursor-pointer bg-white/5 rounded overflow-hidden border border-white/10"
                    >
                      <div className="aspect-video bg-gray-900 overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-start justify-between mb-1.5">
                          <div className="flex-1">
                            <div className="text-[9px] text-orange-500 mb-0.5 uppercase font-bold">{event.type}</div>
                            <h3 className="font-bold text-xs leading-tight">{event.title}</h3>
                          </div>
                          {event.soldOut && (
                            <div className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[9px] font-bold ml-2">
                              SOLD OUT
                            </div>
                          )}
                        </div>
                        <p className="text-[10px] opacity-70 mb-2 leading-relaxed">{event.description}</p>
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-2.5 h-2.5 text-orange-500" />
                              <span>{event.date} • {event.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-2.5 h-2.5 text-orange-500" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-orange-500">{event.price}</div>
                            <div className="opacity-50 text-[9px]">{event.capacity} posti</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LABEL SPACE - COMMUNITY */}
            {activeSection === 'community' && (
              <div className="pb-2 bg-black text-white">
                <div className="p-3 border-b border-white/10 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <h2 className="text-xs font-bold uppercase text-orange-500">COMMUNITY</h2>
                </div>

                <div className="p-3">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded p-3 text-center mb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Send className="w-4 h-4" />
                      <h3 className="font-bold text-sm uppercase">MANDA LA TUA DEMO</h3>
                    </div>
                    <p className="text-[10px] opacity-90 mb-3 leading-relaxed">
                      Il team A&R di Vibes Records ascolta tutte le demo. 
                      Se il tuo sound risuona con noi, ti contattiamo.
                    </p>
                    <button className="bg-black text-white px-4 py-2 rounded font-bold text-xs uppercase w-full">
                      SUBMIT DEMO
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white/5 rounded p-2.5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Target className="w-3.5 h-3.5 text-orange-500" />
                        <h4 className="font-bold text-xs">COSA CERCHIAMO</h4>
                      </div>
                      <ul className="text-[10px] space-y-0.5 opacity-70">
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Artisti trap, drill, R&B con identità forte</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Producer con portfolio originale</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Progetto già avviato con contenuti</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Attitudine professionale e work ethic</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded p-2.5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <FileText className="w-3.5 h-3.5 text-orange-500" />
                        <h4 className="font-bold text-xs">COME INVIARE</h4>
                      </div>
                      <ul className="text-[10px] space-y-0.5 opacity-70">
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>3 tracce migliori (mp3 o link streaming)</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Bio breve (max 200 parole)</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Link social e stats (se disponibili)</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-2.5 h-2.5 mt-0.5 text-orange-500 shrink-0" />
                          <span>Oggetto: DEMO - [Nome Artista]</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded p-2.5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        <h4 className="font-bold text-xs">TEMPI DI RISPOSTA</h4>
                      </div>
                      <p className="text-[10px] opacity-70 leading-relaxed">
                        Ascoltiamo tutte le demo entro 2 settimane. Se interessati, ti contattiamo via email o Instagram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 z-40">
        <div className="flex justify-around items-center py-2">
          {currentSpace === 'home' ? (
            <>
              <button 
                onClick={() => setActiveSection('hero')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'hero' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Home className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Home</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('services')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'services' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Music className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Servizi</span>
              </button>
              
              <div className="w-14"></div>
              
              <button 
                onClick={() => setActiveSection('artists')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'artists' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Users className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Artists</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('info')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'info' ? 'text-orange-500' : 'text-gray-400')}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Info</span>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setActiveSection('blog')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'blog' ? 'text-orange-500' : 'text-gray-400')}
              >
                <FileText className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Blog</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('releases')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'releases' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Music className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Releases</span>
              </button>
              
              <div className="w-14"></div>
              
              <button 
                onClick={() => setActiveSection('events')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'events' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Calendar className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Eventi</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('community')}
                className={'flex flex-col items-center gap-1 p-2 ' + (activeSection === 'community' ? 'text-orange-500' : 'text-gray-400')}
              >
                <Users className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">Community</span>
              </button>
            </>
          )}
        </div>
      </nav>

      <button 
        onClick={() => {
          setShowPortalAnimation(true);
          setTimeout(() => {
            setCurrentSpace(prev => prev === 'home' ? 'label' : 'home');
            setActiveSection(currentSpace === 'home' ? 'blog' : 'hero');
            setShowPortalAnimation(false);
          }, 400);
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-sm shadow-lg flex items-center justify-center z-50 font-black text-xs">
        {currentSpace === 'home' ? 'LABEL' : 'STUDIO'}
      </button>

      {showPortalAnimation && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <VibesLogo size="lg" />
        </div>
      )}

      {selectedArtist && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="sticky top-0 bg-black border-b border-white/10 p-4 flex items-center justify-between">
            <button onClick={() => setSelectedArtist(null)}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="font-bold text-white uppercase text-sm">{selectedArtist.name}</h2>
            <button onClick={() => {
              const newLikes = new Set(likedArtists);
              if (newLikes.has(selectedArtist.id)) {
                newLikes.delete(selectedArtist.id);
              } else {
                newLikes.add(selectedArtist.id);
              }
              setLikedArtists(newLikes);
            }}>
              <Heart className={likedArtists.has(selectedArtist.id) ? 'w-6 h-6 fill-orange-500 text-orange-500' : 'w-6 h-6 text-white'} />
            </button>
          </div>

          <div className="aspect-square bg-gray-900">
            <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 text-white space-y-6">
            <div>
              <h1 className="text-2xl font-black uppercase mb-1">{selectedArtist.name}</h1>
              <p className="text-orange-500 font-bold">{selectedArtist.genre}</p>
              <p className="text-sm opacity-50">{selectedArtist.city}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {Object.entries(selectedArtist.stats).map(([key, value]) => (
                <div key={key} className="bg-white/5 rounded-sm p-3 border border-white/10">
                  <div className="text-xl font-bold text-orange-500">{value}</div>
                  <div className="text-xs uppercase opacity-70 mt-1">{key}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase mb-2 text-orange-500">Bio</h3>
              <p className="text-sm opacity-80">{selectedArtist.bio}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase mb-2 text-orange-500">Top Tracks</h3>
              <div className="space-y-2">
                {selectedArtist.topTracks.map((track, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-sm">
                    <span className="text-orange-500 font-bold">{i + 1}</span>
                    <span className="text-sm">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase mb-2 text-orange-500">Achievements</h3>
              <div className="space-y-2">
                {selectedArtist.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="opacity-80">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-sm font-bold text-sm uppercase">
                <Instagram className="w-4 h-4 inline mr-2" />
                Instagram
              </button>
              <button className="flex-1 bg-green-600 py-3 rounded-sm font-bold text-sm uppercase">
                <Play className="w-4 h-4 inline mr-2" />
                Spotify
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BLOG POST DETAIL MODAL */}
      {selectedBlogPost && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="sticky top-0 bg-black border-b border-white/10 p-4 flex items-center justify-between">
            <button onClick={() => setSelectedBlogPost(null)}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="font-bold text-white uppercase text-sm">BLOG</h2>
            <button onClick={() => {
              const newLikes = new Set(likedPosts);
              if (newLikes.has(selectedBlogPost.id)) {
                newLikes.delete(selectedBlogPost.id);
              } else {
                newLikes.add(selectedBlogPost.id);
              }
              setLikedPosts(newLikes);
            }}>
              <Heart className={likedPosts.has(selectedBlogPost.id) ? 'w-6 h-6 fill-orange-500 text-orange-500' : 'w-6 h-6 text-white'} />
            </button>
          </div>

          <div className="aspect-video bg-gray-900">
            <img src={selectedBlogPost.image} alt={selectedBlogPost.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 text-white space-y-4">
            <div className="bg-orange-500 text-black px-2 py-1 rounded-sm text-xs font-bold inline-block">
              {selectedBlogPost.category}
            </div>
            <h1 className="text-2xl font-black uppercase">{selectedBlogPost.title}</h1>
            <div className="flex items-center gap-4 text-xs opacity-70">
              <span>{selectedBlogPost.author}</span>
              <span>•</span>
              <span>{selectedBlogPost.date}</span>
              <span>•</span>
              <span>{selectedBlogPost.readTime}</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">{selectedBlogPost.excerpt}</p>
            
            <div className="bg-white/5 rounded-sm p-4 border border-white/10">
              <p className="text-sm opacity-80 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-sm">
                <Heart className="w-4 h-4" />
                <span>{selectedBlogPost.likes}</span>
              </button>
              <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-sm">
                <Share2 className="w-4 h-4" />
                <span>Condividi</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RELEASE DETAIL MODAL */}
      {selectedRelease && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="sticky top-0 bg-black border-b border-white/10 p-4 flex items-center justify-between">
            <button onClick={() => setSelectedRelease(null)}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="font-bold text-white uppercase text-sm">RELEASE</h2>
            <div className="w-6"></div>
          </div>

          <div className="aspect-square bg-gray-900">
            <img src={selectedRelease.cover} alt={selectedRelease.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 text-white space-y-6">
            <div>
              <div className="text-xs text-orange-500 mb-1">{selectedRelease.type}</div>
              <h1 className="text-2xl font-black uppercase mb-1">{selectedRelease.title}</h1>
              <p className="text-lg font-bold">{selectedRelease.artist}</p>
              <p className="text-sm opacity-50 mt-2">Released: {selectedRelease.releaseDate}</p>
            </div>

            <div className="bg-white/5 rounded-sm p-4 border border-white/10">
              <div className="text-sm font-bold mb-2">STREAMING STATS</div>
              <div className="flex items-center gap-2 text-2xl font-black text-orange-500">
                <Play className="w-6 h-6" />
                {(selectedRelease.streams / 1000).toFixed(0)}K
              </div>
              <div className="text-xs opacity-50 mt-1">Total streams</div>
            </div>

            <div className="space-y-3">
              <a 
                href={selectedRelease.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 py-3 rounded-sm font-bold text-sm uppercase w-full"
              >
                <Play className="w-4 h-4" />
                ASCOLTA SU SPOTIFY
              </a>
              <a 
                href={selectedRelease.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-red-600 py-3 rounded-sm font-bold text-sm uppercase w-full"
              >
                <Play className="w-4 h-4" />
                APPLE MUSIC
              </a>
            </div>
          </div>
        </div>
      )}

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="sticky top-0 bg-black border-b border-white/10 p-4 flex items-center justify-between">
            <button onClick={() => setSelectedEvent(null)}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="font-bold text-white uppercase text-sm">EVENTO</h2>
            <div className="w-6"></div>
          </div>

          <div className="aspect-video bg-gray-900">
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 text-white space-y-6">
            <div>
              <div className="text-xs text-orange-500 mb-1">{selectedEvent.type}</div>
              <h1 className="text-2xl font-black uppercase mb-2">{selectedEvent.title}</h1>
              <p className="text-sm opacity-80 leading-relaxed">{selectedEvent.description}</p>
            </div>

            <div className="bg-white/5 rounded-sm p-4 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-xs opacity-50">Data e ora</div>
                  <div className="font-bold">{selectedEvent.date} • {selectedEvent.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-xs opacity-50">Location</div>
                  <div className="font-bold">{selectedEvent.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-xs opacity-50">Capienza</div>
                  <div className="font-bold">{selectedEvent.capacity} posti</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-sm p-4 text-center">
              <div className="text-3xl font-black mb-2">{selectedEvent.price}</div>
              {selectedEvent.soldOut ? (
                <div className="bg-red-600 text-white py-3 rounded-sm font-bold text-sm uppercase">
                  SOLD OUT
                </div>
              ) : (
                <button className="bg-black text-white py-3 rounded-sm font-bold text-sm uppercase w-full">
                  PRENOTA POSTO
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showMenu && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowMenu(false)}>
          <div className="bg-black h-full w-80 max-w-full border-r border-white/10" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <VibesLogo size="md" />
                <button onClick={() => setShowMenu(false)}>
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-400 uppercase">Milano Baggio</p>
            </div>

            <div className="p-4 space-y-1 text-white">
              <button className="flex items-center gap-3 w-full text-left p-3 rounded-sm hover:bg-white/5">
                <Home className="w-5 h-5" />
                <span className="text-sm font-bold uppercase">Studio</span>
              </button>
              <button className="flex items-center gap-3 w-full text-left p-3 rounded-sm hover:bg-white/5">
                <Radio className="w-5 h-5" />
                <span className="text-sm font-bold uppercase">Label</span>
              </button>
              <button className="flex items-center gap-3 w-full text-left p-3 rounded-sm hover:bg-white/5">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-bold uppercase">Preferiti</span>
              </button>
              <button className="flex items-center gap-3 w-full text-left p-3 rounded-sm hover:bg-white/5">
                <Settings className="w-5 h-5" />
                <span className="text-sm font-bold uppercase">Impostazioni</span>
              </button>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-br from-orange-600 to-orange-800 rounded-sm p-4 text-white">
              <p className="text-xs uppercase font-bold mb-2">Prenota Sessione</p>
              <button className="w-full bg-black py-2 rounded-sm text-sm font-bold uppercase">
                CONTATTACI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
