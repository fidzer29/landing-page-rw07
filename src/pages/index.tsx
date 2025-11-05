import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Users, Target, Briefcase, Camera, Mail, MapPin, Phone, ChevronDown, Sparkles, Award, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import kegiatan1 from "@/assets/Administrasi.jpg";
import kegiatan2 from "@/assets/Kerja Bakti.jpg";
import kegiatan3 from "@/assets/Layanan Kesehatan.jpg";
import kegiatan4 from "@/assets/Qurban.jpg";
import kegiatan5 from "@/assets/Zumba.jpg";
import kegiatan6 from "@/assets/Polsek.jpg";
import kegiatan7 from "@/assets/Posyandu.jpg";
import Logo from "@/assets/logo_rw.png";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const images = [kegiatan1, kegiatan2, kegiatan3, kegiatan4, kegiatan5, kegiatan6];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <img src={Logo} alt="Logo RW 07" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl">Rukun Warga 07</span>
                <p className="text-xs text-muted-foreground">Bersama Membangun</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("profil")} className="text-foreground hover:text-primary transition-colors font-medium">
                Profil
              </button>
              <button onClick={() => scrollToSection("visi-misi")} className="text-foreground hover:text-primary transition-colors font-medium">
                Visi & Misi
              </button>
              <button onClick={() => scrollToSection("struktur")} className="text-foreground hover:text-primary transition-colors font-medium">
                Struktur
              </button>
              <button onClick={() => scrollToSection("program")} className="text-foreground hover:text-primary transition-colors font-medium">
                Program
              </button>
              <button onClick={() => scrollToSection("galeri")} className="text-foreground hover:text-primary transition-colors font-medium">
                Galeri
              </button>
              <Button onClick={() => scrollToSection("kontak")} className="gradient-primary shadow-lg hover:shadow-xl transition-all">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-slide-up">
              {["profil", "visi-misi", "struktur", "program", "galeri", "kontak"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 hover:bg-muted rounded-lg transition-colors font-medium capitalize"
                >
                  {section.replace("-", " & ")}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-screen">
              {[kegiatan6, kegiatan4, kegiatan7].map((image, index) => (
                <CarouselItem key={index} className="h-screen">
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`Hero ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/70"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/30 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/30 text-white hover:bg-white/20" />
          </Carousel>
        </div>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/20 to-accent/30 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)] z-[1]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float z-[1]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float z-[1]" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-up">
            <div className="inline-block mb-6 glass-effect px-8 py-4 rounded-full border border-white/30 shadow-2xl">
              <span className="text-white font-bold text-lg">🏘️ Rukun Warga 07</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              Membangun Komunitas<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-foreground to-white">yang Lebih Baik</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Bersama menciptakan lingkungan yang harmonis, aman, dan sejahtera untuk semua warga
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 font-semibold">
                Bergabung Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 glass-effect border-2 border-white/40 text-white hover:bg-white/20 shadow-2xl font-semibold">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
      </section>

      {/* Profile Section */}
      <section id="profil" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">Tentang Kami</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Profil RW 07
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat tentang Rukun Warga 07 dan komitmen kami untuk kemajuan bersama
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="flex flex-col justify-between h-full p-10 hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20 bg-white/80 backdrop-blur">
              <div>
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-fit mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Tentang Kami</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  RW 07 merupakan komunitas warga yang peduli dan aktif dalam membangun lingkungan yang lebih baik. 
                  Kami berkomitmen untuk menciptakan suasana yang harmonis, aman, dan nyaman bagi seluruh warga.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col justify-between h-full p-10 hover:shadow-2xl transition-all hover:scale-105 border-0 bg-gradient-to-br from-primary via-secondary to-accent">
              <div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-2xl w-fit mb-6">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Wilayah</h3>
                <p className="text-white/95 leading-relaxed text-lg">
                  Meliputi 8 RT dengan total lebih dari 500 Kepala Keluarga yang tersebar di area seluas 25 hektar. 
                  Lokasi strategis dengan akses mudah ke fasilitas umum.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section id="visi-misi" className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur rounded-full mb-4 border border-white/30">
              <span className="text-white font-semibold">Arah & Tujuan</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Visi & Misi
            </h2>
            <p className="text-white/95 text-lg max-w-2xl mx-auto font-light">
              Landasan dan arah perjuangan kami untuk masa depan yang lebih cerah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 glass-effect border-2 border-white/30 hover:shadow-2xl transition-all hover:scale-105 bg-white/10 backdrop-blur-xl">
              <div className="bg-white/20 backdrop-blur p-4 rounded-2xl w-fit mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Visi</h3>
              <p className="text-white/95 leading-relaxed text-lg font-light">
                Mewujudkan RW 07 sebagai lingkungan yang asri, aman, harmonis, dan sejahtera 
                dengan warga yang peduli dan aktif dalam pembangunan.
              </p>
            </Card>
            
            <Card className="p-10 glass-effect border-2 border-white/30 hover:shadow-2xl transition-all hover:scale-105 bg-white/10 backdrop-blur-xl">
              <div className="bg-white/20 backdrop-blur p-4 rounded-2xl w-fit mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Misi</h3>
              <ul className="text-white/95 space-y-4">
                <li className="flex items-start gap-4 group">
                  <span className="text-white text-2xl bg-white/20 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-lg font-light">Meningkatkan kesejahteraan dan kualitas hidup warga</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-white text-2xl bg-white/20 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-lg font-light">Membangun infrastruktur yang memadai</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-white text-2xl bg-white/20 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-lg font-light">Menciptakan keamanan dan kenyamanan lingkungan</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section id="struktur" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-5xl font-bold">Struktur Organisasi</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Ketua RW</p>
                <p className="text-2xl font-bold">Bapak [Nama Ketua]</p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Wakil Ketua", name: "Bapak [Nama Wakil]" },
                { title: "Sekretaris", name: "Ibu [Nama Sekretaris]" }
              ].map((position, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{position.title}</p>
                    <p className="text-xl font-semibold">{position.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Bendahara", name: "Ibu [Nama]" },
                { title: "Sie. Keamanan", name: "Bapak [Nama]" },
                { title: "Sie. Kebersihan", name: "Ibu [Nama]" }
              ].map((position, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{position.title}</p>
                    <p className="text-base font-semibold">{position.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Kerja Section */}
      <section id="program" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-5xl font-bold">Program Kerja</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Kerja Bakti Rutin",
                description: "Kegiatan gotong royong membersihkan lingkungan setiap minggu untuk menjaga kebersihan dan keindahan RW",
                color: "primary"
              },
              {
                title: "Posyandu Balita",
                description: "Pelayanan kesehatan untuk ibu dan anak dengan jadwal rutin setiap bulan",
                color: "secondary"
              },
              {
                title: "Ronda Malam",
                description: "Sistem keamanan lingkungan dengan jadwal ronda bergantian untuk menjaga keamanan warga",
                color: "accent"
              },
              {
                title: "Peringatan Hari Besar",
                description: "Perayaan hari besar nasional dan keagamaan bersama seluruh warga RW",
                color: "primary"
              },
              {
                title: "Arisan & PKK",
                description: "Kegiatan pemberdayaan ibu-ibu PKK dan arisan warga untuk mempererat silaturahmi",
                color: "secondary"
              },
              {
                title: "Olahraga Bersama",
                description: "Kegiatan olahraga rutin seperti senam pagi dan jalan sehat untuk kesehatan warga",
                color: "accent"
              },
            ].map((program, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className={`absolute inset-0 gradient-${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className={`w-14 h-14 gradient-${program.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Briefcase className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section id="galeri" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <Camera className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-5xl font-bold">Dokumentasi Kegiatan</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {images.map((src, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer"
              >
                {/* Gambar utama */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Kegiatan ${index + 1}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <p className="font-bold text-lg mb-1">Kegiatan {index + 1}</p>
                  <p className="text-sm text-muted-foreground">
                    Dokumentasi kegiatan warga RW 07
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-5xl font-bold">Hubungi Kami</h2>
          </div>
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-10 blur-3xl"></div>
            <CardContent className="p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: "Alamat Sekretariat",
                      content: (
                        <>
                          Jl. [Nama Jalan], RT XX/RW 07<br />
                          Kelurahan [Nama Kelurahan]<br />
                          Kecamatan [Nama Kecamatan]
                        </>
                      )
                    },
                    {
                      icon: Phone,
                      title: "Telepon",
                      content: "+62 XXX-XXXX-XXXX"
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "rw07@email.com"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-2">{contact.title}</p>
                        <p className="text-muted-foreground leading-relaxed">{contact.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-muted/30 rounded-2xl p-8">
                  <p className="font-bold text-xl mb-6">Jam Pelayanan</p>
                  <div className="space-y-4 text-muted-foreground">
                    {[
                      { day: "Senin - Jumat", time: "08.00 - 16.00" },
                      { day: "Sabtu", time: "08.00 - 12.00" },
                      { day: "Minggu & Hari Libur", time: "Tutup" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span>{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-8 w-full gradient-primary shadow-lg hover:shadow-xl transition-all text-lg py-6">
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="text-white font-bold text-2xl">07</span>
          </div>
          <p className="text-2xl font-bold text-white mb-3">Rukun Warga 07</p>
          <p className="text-white/90 text-lg mb-8">
            Bersama Membangun Lingkungan yang Lebih Baik
          </p>
          <p className="text-white/70 text-sm">
            © 2025 RW 07. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
