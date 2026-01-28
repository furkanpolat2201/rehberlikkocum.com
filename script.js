document.addEventListener('DOMContentLoaded', function() {
    // 1. VERİ SETİ
    const ROBOT_DATALARI = {
        "YKS": {
            "TYT TÜRKÇE - ANLAM BİLGİSİ": {
                "TEMEL DÜZEY": ["Birey A Serisi", "Önder Hoca KR Akademi", "Hız ve Renk"],
                "ORTA DÜZEY": ["345 Sıfır Risk", "Bilgi Sarmal", "Endemik Paragraf"],
                "İLERİ DÜZEY": ["Apotemi Paragraf", "Kronometre Limit", "Prf IQ Paragraf"]
            },
            "TYT MATEMATİK": {
                "TEMEL DÜZEY": ["Aktif Yay. O'dan Başlayanlara", "Matematiğin İlacı", "Birey A"],
                "ORTA DÜZEY": ["345 Yayınları", "Bilgi Sarmal", "Mert Hoca TYT"],
                "İLERİ DÜZEY": ["Acil Matematik", "3D Yayınları", "Orijinal"]
            }
        },
        "LGS": {
            "TÜRKÇE": {
                "TEMEL DÜZEY": ["Zeka Küpü", "Limit Yayınları", "Koray Varol"],
                "ORTA DÜZEY": ["Nartest Mavi", "Paragrafın Ritmi Arı", "Paraf IQ"],
                "İLERİ DÜZEY": ["Sinan Kuzucu*", "Okyanus Master Paragraf", "Fenomen"]
            },
            "MATEMATİK": {
                "TEMEL DÜZEY": ["Matematix", "Fenomen Fasiküller", "Antrenmanlarla Matematik"],
                "ORTA DÜZEY": ["Okyanus Check Et", "Paraf IQ", "Hız Yayınları*"],
                "İLERİ DÜZEY": ["Newton All Star", "Okyanus Master", "Sinan Kuzucu"]
            }
        }
    };

    // 2. ELEMENTLERİ SEÇELİM
    const sinavSecim = document.getElementById('sinav-secim');
    const dersSecim = document.getElementById('ders-secim');
    const dersEtiketi = document.getElementById('ders-etiketi');
    const seviyeSecim = document.getElementById('seviye-secim');
    const seviyeEtiketi = document.getElementById('seviye-etiketi');
    const kaynakListesi = document.getElementById('kaynak-listesi');

    // 3. SINAV SEÇİLDİĞİNDE
    if (sinavSecim) {
        sinavSecim.addEventListener('change', function() {
            const secilenSinav = this.value;
            dersSecim.innerHTML = '<option value="">-- Ders Seçiniz --</option>';
            seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
            kaynakListesi.innerHTML = '';
            
            if (secilenSinav && ROBOT_DATALARI[secilenSinav]) {
                Object.keys(ROBOT_DATALARI[secilenSinav]).forEach(ders => {
                    const opt = document.createElement('option');
                    opt.value = ders;
                    opt.textContent = ders;
                    dersSecim.appendChild(opt);
                });
                dersSecim.style.display = 'block';
                if(dersEtiketi) dersEtiketi.style.display = 'block';
            } else {
                dersSecim.style.display = 'none';
                if(dersEtiketi) dersEtiketi.style.display = 'none';
            }
        });
    }

    // 4. DERS SEÇİLDİĞİNDE
    if (dersSecim) {
        dersSecim.addEventListener('change', function() {
            const sinav = sinavSecim.value;
            const ders = this.value;
            seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
            kaynakListesi.innerHTML = '';

            if (sinav && ders && ROBOT_DATALARI[sinav][ders]) {
                Object.keys(ROBOT_DATALARI[sinav][ders]).forEach(seviye => {
                    const opt = document.createElement('option');
                    opt.value = seviye;
                    opt.textContent = seviye;
                    seviyeSecim.appendChild(opt);
                });
                seviyeSecim.style.display = 'block';
                if(seviyeEtiketi) seviyeEtiketi.style.display = 'block';
            } else {
                seviyeSecim.style.display = 'none';
                if(seviyeEtiketi) seviyeEtiketi.style.display = 'none';
            }
        });
    }

    // 5. SEVİYE SEÇİLDİĞİNDE
    if (seviyeSecim) {
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
    }
});
