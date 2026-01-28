// --- TÜM BİRLEŞTİRİLMİŞ KAYNAK VERİSİ ---
const ROBOT_DATALARI = {
    "YKS": {
        "TYT TÜRKÇE - ANLAM BİLGİSİ": {
            "TEMEL DÜZEY": ["Birey A Serisi", "Önder Hoca KR Akademi (Video Destekli)", "Hız ve Renk", "Hız Yayınları"],
            "ORTA DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Endemik Paragraf", "Bilgi Sarmal", "Paraf Soru Kütüphanesi", "345 Sıfır Risk", "Süreli Türkçe Soru Bankası", "Çap plus", "3-4-5 Yay.", "Altın karma yayınları tyt paragraf konu konu çıkmış sorular"],
            "İLERİ DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Prf IQ Paragraf", "Kronometre Limit", "Paragrafın Şifresi (Yargı)", "Paradoks (Tonguç, Gri)", "Apotemi Paragraf"]
        },
        "TYT TÜRKÇE - DİL BİLGİSİ": {
            "TEMEL DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Dil Bilgisi İleri Seviye Soru Bank.", "Sıfırdan Sonsuza Doktirin Yayınları", "birey a"],
            "ORTA DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Bilgi Sarmal", "345", "Yayın Denizi Pro", "palme", "benim hocam", "hız ve renk"],
            "İLERİ DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Yayın Denizi Pro 2", "3d dil bilgisi"]
        },
        "TYT MATEMATİK": {
            "TEMEL DÜZEY": ["Aktif Yay. O'dan Başlayanlara", "Matematiğin İlacı (Acil Yay)", "Birey A serisi", "Kafadengi Turuncu", "Karekök Sıfır", "AKTİF GÜÇLENDİREN SERİ", "MİKRO ORJİNAL", "rehber matematik"],
            "ORTA DÜZEY": ["345 Yayınları", "Bilgi Sarmal", "Kaf 1 (Video Dersli)", "Kaf 2 (Video Dersli)", "Eğitim Vadisi yay.", "Karekök Yayınları", "Mert Hoca TYT Video Ders", "Miray Yay. Soru B. (Bıyıklı Matematik)", "esen yayınları"],
            "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Apotemi TYT Soru Bankası", "Toprak (Yeni Nesil +)", "Orijinal Yayınları", "Paraf Yeni Nesil Soru Kütüphanesi", "Prf Gold serisi", "Metin Yayınları", "Aydın Yay. Matematik S. Ban.", "Endemik yayınları", "Eyüp B TYT Video Defter"]
        },
        "TYT PROBLEMLER": {
            "TEMEL DÜZEY": ["Ant. Yay. Hiç Problem Değil", "Tonguç Problematik", "Rehber Mat. 321 Soruda Bitir İşi", "Aktif Matematik", "Problemlerin İlacı"],
            "ORTA DÜZEY": ["Acil Problemler", "Bilgi Sarmal ( Sınav ayarı)", "345 yayınları", "Arı Yay. Problemlerin Ritmi", "ORJİNAL MİKRO SERİSİ"],
            "İLERİ DÜZEY": ["Toprak yayınları", "Apotemi Problemler", "Problemlerin Ritmi", "Endemik yayınları", "Hız ve Renk", "Supara Problemler"]
        },
        "TYT GEOMETRİ": {
            "TEMEL DÜZEY": ["Geometrinin İlacı (Acil Yay)", "Kafadengi Turuncu", "Aktif Ö. Yayınları", "Full yayınları", "Eis (Föy)", "Çap(Föy)", "Ens yayınları"],
            "ORTA DÜZEY": ["3 4 5 Yayınları", "Bilgi Sarmal", "Eğitim vadisi", "Metin yayınları", "Yayın Denizi Pro", "Kaf Geo 1-2", "AYDIN YAYINLARI", "Kenan Kara ile Geometri"],
            "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Orijinal yayınları", "Karekök yayınları", "Apotemi Maestro", "Toprak", "Apotemi Analitik Fasikül"]
        },
        "TYT FİZİK": {
            "TEMEL DÜZEY": ["Ens yayınları", "okyanus 40 seansta", "Prf yay. Adım adım", "Aktif fizik", "miray tyt fizik"],
            "ORTA DÜZEY": ["Eğitim vadisi yay.", "3 4 5 Yayınları", "Hız ve renk", "Bilgi Sarmal", "Kafa dengi yayınları", "Ertan Sinan Setler", "Altuğ Güneş Setler", "Vip Fizik"],
            "İLERİ DÜZEY": ["Nihat Bilgin'in kitabı", "3D yayınları", "Karaağaç Yayınları", "Yayın Denizi", "MF Kazanım"]
        },
        "TYT KİMYA": {
            "TEMEL DÜZEY": ["Aktif Ö. Yayınları", "ENS yayınları", "Hız ve renk", "Prf yay. Adım adım", "Miray"],
            "ORTA DÜZEY": ["Orbital yayınları", "3 4 5 Yayınları", "Palme yayınları", "Yayın denizi", "9.SINIF BİLGİ SARMAL", "miray"],
            "İLERİ DÜZEY": ["Palme yayınları", "3 4 5 yayınları", "3D yayınları", "Aydın yayınları", "Apotemi TYT Soru Bankası"]
        },
        "TYT BİYOLOJİ": {
            "TEMEL DÜZEY": ["Biyotik yayınları", "Prf yay. Adım Adım", "Ens yayınları", "Okyanus 40 seansta", "Betül Biyoloji"],
            "ORTA DÜZEY": ["Biyotik yayınları", "3 4 5 Yayınları", "Palme yayınları", "Bilgi sarmal", "DR. Biyoloji", "Fundamentals"],
            "İLERİ DÜZEY": ["3D Yayınları", "Aydın yayınları", "Prf Yayın", "Limit yayınları"]
        },
        "TYT TARİH": {
            "TEMEL DÜZEY": ["Çözüm yayınları", "Eis yayınları 9. sınıf"],
            "ORTA DÜZEY": ["Ramazan yetkin AYT", "3 4 5 Yayınları", "Yayın denizi", "Palme Soru Bankası", "benim hocam"],
            "İLERİ DÜZEY": ["Bilgi Sarmal", "Limit yayınları", "Karekök yayınları"]
        },
        "TYT COĞRAFYA": {
            "TEMEL DÜZEY": ["Yayın denizi", "Eis coğrafya 9. sınıf", "E Coğrafya"],
            "ORTA DÜZEY": ["Benim Hocam Amiral", "3 4 5 Yayınları", "Palme yayıncılık", "Yavuz Tuna TYT SB", "Limit El Kitabı"],
            "İLERİ DÜZEY": ["Limit yayıncılık TYT AYT", "Bilgi Sarmal", "Karekök yayınları", "3d"]
        },
        "TYT FELSEFE": {
            "TEMEL DÜZEY": ["Dahi Adam Yayınları", "Yayın Denizi", "Bilim Yolu yayınları"],
            "ORTA DÜZEY": ["Limit Yayınları", "3 4 5 Yayınları", "3D Yayıncılık", "Benim Hocam (Can Köni)"],
            "İLERİ DÜZEY": []
        },
        "AYT MATEMATİK": {
            "TEMEL DÜZEY": ["Aktif Ö. yay.", "Birey A serisi", "Merhaba AYT (Şenol Hoca)", "ACİL İLACI", "ENS 12. SINIF FASİKÜL"],
            "ORTA DÜZEY": ["Bilgi Sarmal", "3 4 5 Yayınları", "Endemik yayınları", "Metin yayınları", "Mert Hoca AYT Video Ders"],
            "İLERİ DÜZEY": ["3D yayınları", "Acil yayınları", "Orijinal yayınları", "Kaf 3-4", "Apotemi Fasikülleri"]
        },
"AYT EDEBİYAT": {
    "TEMEL DÜZEY": ["Okyanus yay.", "3 4 5 yayınları", "Sınav yayınları", "Kafa dengi yayınları"],
    "ORTA DÜZEY": ["Yayın Denizi", "3 4 5 yayınları", "Palme", "Editör yay. Konsensus", "Karekök yayınları", "hız ve renk"],
    "İLERİ DÜZEY": ["Limit yayınları", "Bilgi sarmal", "Arı yayınları", "3D yayınları", "Süre"]
  },
  "AYT COĞRAFYA": {
    "TEMEL DÜZEY": ["Okyanus yay."],
    "ORTA DÜZEY": ["Palme yayıncılık", "3 4 5 Yayınları", "Kafa dengi yayınları", "Lider plus yayınları", "Bilgi sarmal", "Paraf", "Yavuz Tuna AYT El Kitabı", "Yavuz Tuna AYT Soru Bankası"],
    "İLERİ DÜZEY": ["Limit yayınları", "Karekök yayınları", "Toprak", "3d"]
  },
  "AYT TARİH": {
    "TEMEL DÜZEY": ["Çözüm yayınları", "Eis yayınları 9. sınıf"],
    "ORTA DÜZEY": ["Ramazan yetkin AYT (eşit) (Video Ders Notu)", "Ramazan yetkin AYT Soru Bankası", "3 4 5 Yayınları", "Yayın denizi", "Palme yayıncılık", "benim hocam", "hız"],
    "İLERİ DÜZEY": ["Bilgi Sarmal", "Limit yayınları", "Karekök yayınları", "Merkez yayınları", "Paraf"]
        }
    },
    "LGS": {
        "TÜRKÇE": {
            "TEMEL DÜZEY": ["Zeka Küpü", "Limit Yayınları", "Simya", "Koray Varol", "İşleyen Zeka"],
            "ORTA DÜZEY": ["Ben Korkmam", "Tonguç", "Bilfen", "Nartest Mavi", "Bilfen Protest", "Paragraf Nartest Mavi", "Paragrafın Ritmi Arı", "Paragraf Karekök", "Paraf IQ", "Zoom*", "Çanta Yayınları", "Güçlendiren Türkçe Ankara Y."],
            "İLERİ DÜZEY": ["Sinan Kuzucu*", "Okyanus Master Paragraf", "Hız*", "Fenomen", "Bilfen ProBil", "Nartest Kırmızı", "Paragraf Fenomen"]
        },
        "MATEMATİK": {
            "TEMEL DÜZEY": ["Matematix", "Fenomen Matematik Fasikülleri*", "Arı Matematik", "Nartest İlk Adım", "Antrenmanlarla Matematik", "Yanıt Yayınları", "Mozaik", "Bumerang Matematik"],
            "ORTA DÜZEY": ["Okyanus Check Et", "Paraf IQ", "Strateji Bam Bam", "Zoom*", "Prova Akademi Sorular Konuşuyor", "Tudem Kod-32", "Hız Yayınları*", "Güçlendiren Matematik Ankara Yayıncılık", "Tonguç", "Çanta Yayınları", "Fenomen A", "Paraf"],
            "İLERİ DÜZEY": ["Tudem", "Newton All Star", "Bilfen-ProBil", "Muba Mutlak Başarı", "Okyanus Master", "Fenomen B", "Sinan Kuzucu", "Kafadengi Challenger", "Fenomen Geometri Tabanlı"]
        },
        "FEN BİLİMLERİ": {
            "TEMEL DÜZEY": ["Süper A Akademi Nitelik Y.", "Bilfen Yayınları"],
            "ORTA DÜZEY": ["Paraf IQ", "Okyanus Check Et", "Mozaik", "Zoom", "Nitelik B", "Tudem Kod-32", "Hız Yayınları*", "Palme Plus", "Kafadengi Fen Bilimleri Kafası", "Nartest Mavi", "Fenomen", "Güçlendiren Fen Bilimleri Ankara Y."],
            "İLERİ DÜZEY": ["Newton Allstar", "Okyanus Master-Update", "Çanta Yayınları", "Kafadengi Challenger"]
        },
        "T.C. İNKILAP TARİHİ": {
            "TEMEL DÜZEY": ["Tonguç Akademi", "Puan Yayınları", "Okyanus Classmate", "Nartest Yeşil", "Av Akıllı Versiyon Yayınları"],
            "ORTA DÜZEY": ["Ulti", "Palme", "Limit Yayınları", "İnkılap Kafası Kafadengi", "Nartest Mavi", "Hız Yayınları", "Fenomen", "Güçlendiren İnkılap Ankara Y.", "Zoom", "Paraf"],
            "İLERİ DÜZEY": ["Sinan Kuzucu"]
        },
        "İNGİLİZCE": {
            "TEMEL DÜZEY": ["Tonguç Dinamo"],
            "ORTA DÜZEY": ["İngilizce Kafası Kafadengi", "Palme Plus", "More and More", "Ahead With English", "Joyfull", "Shall We", "Hız Yayınları", "Fenomen", "Güçlendiren İngilizce Ankara Y.", "Zoom", "Paraf"],
            "İLERİ DÜZEY": ["YDS Publishing", "Team Elt", "Masterclass", "Yanıt Yayınları"]
            "DİN KÜLTÜRÜ VE AHLAK BİLGİSİ": {
    "TEMEL DÜZEY": ["Okyanus Yayınları CLASSMATE Soru Bankası", "Tonguç Yayınları Taktikli Soru Bankası"],
    "ORTA DÜZEY": ["Tonguç Yayınları Dinamo Soru Bankası",
    "Palme Yayıncılık Konu Anlatımlı",
    "Tudem Yayınları – Din Kültürü HBA",
    "Nartest Yayınları – Altın Nokta Mavi Seri Bankası",
    "Nitelik Yayınları – Süper Soru Kitabı",
    "Hız Yayınları Soru Bankası"],
    "İLERİ DÜZEY": ["Bilfen Yayınları –Pro Test Yeni Nesil Soru Bankası","Palme Yayınları – Plus Serisi Yeni Nesil Soru Kitabı"]
        }
    }
};

// 2. ELEMENTLERİ SEÇELİM (ID'ler senin HTML ile birebir aynı)
const sinavSecim = document.getElementById('sinav-secim');
const dersSecim = document.getElementById('ders-secim');
const dersEtiketi = document.getElementById('ders-etiketi');
const seviyeSecim = document.getElementById('seviye-secim');
const seviyeEtiketi = document.getElementById('seviye-etiketi');
const kaynakListesi = document.getElementById('kaynak-listesi');

// 3. SINAV SEÇİLDİĞİNDE DERSLERİ DOLDUR
sinavSecim.addEventListener('change', function() {
    const secilenSinav = this.value;
    
    // Alt menüleri temizle ve gizle
    dersSecim.innerHTML = '<option value="">-- Ders Seçiniz --</option>';
    seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
    kaynakListesi.innerHTML = '';
    
    seviyeSecim.style.display = 'none';
    if(seviyeEtiketi) seviyeEtiketi.style.display = 'none';

    if (secilenSinav && ROBOT_DATALARI[secilenSinav]) {
        // Dersleri doldur
        const dersler = Object.keys(ROBOT_DATALARI[secilenSinav]);
        dersler.forEach(ders => {
            const opt = document.createElement('option');
            opt.value = ders;
            opt.textContent = ders;
            dersSecim.appendChild(opt);
        });
        
        // Ders kutusunu göster
        dersSecim.style.display = 'block';
        if(dersEtiketi) dersEtiketi.style.display = 'block';
    } else {
        dersSecim.style.display = 'none';
        if(dersEtiketi) dersEtiketi.style.display = 'none';
    }
});

// 4. DERS SEÇİLDİĞİNDE SEVİYELERİ DOLDUR
dersSecim.addEventListener('change', function() {
    const sinav = sinavSecim.value;
    const ders = this.value;
    
    // Seviye menüsünü temizle
    seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
    kaynakListesi.innerHTML = '';

    if (sinav && ders && ROBOT_DATALARI[sinav][ders]) {
        const seviyeler = Object.keys(ROBOT_DATALARI[sinav][ders]);
        seviyeler.forEach(seviye => {
            const opt = document.createElement('option');
            opt.value = seviye;
            opt.textContent = seviye;
            seviyeSecim.appendChild(opt);
        });
        
        // Seviye kutusunu göster
        seviyeSecim.style.display = 'block';
        if(seviyeEtiketi) seviyeEtiketi.style.display = 'block';
    } else {
        seviyeSecim.style.display = 'none';
        if(seviyeEtiketi) seviyeEtiketi.style.display = 'none';
    }
});

// 5. SEVİYE SEÇİLDİĞİNDE KAYNAKLARI LİSTELE
seviyeSecim.addEventListener('change', function() {
    const sinav = sinavSecim.value;
    const ders = dersSecim.value;
    const seviye = this.value;
    
    kaynakListesi.innerHTML = '';

    if (sinav && ders && seviye && ROBOT_DATALARI[sinav][ders][seviye]) {
        const kaynaklar = ROBOT_DATALARI[sinav][ders][seviye];
        let className = '';
        let emoji = '';

        if (seviye === "TEMEL DÜZEY") { className = "kolay-kaynak"; emoji = "🟢"; }
        else if (seviye === "ORTA DÜZEY") { className = "orta-kaynak"; emoji = "🔵"; }
        else if (seviye === "İLERİ DÜZEY") { className = "zor-kaynak"; emoji = "🔴"; }

        kaynaklar.forEach(kaynak => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="list-emoji">${emoji}</span> ${kaynak}`;
            li.className = className;
            kaynakListesi.appendChild(li);
        });
    }
});
