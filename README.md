# SpeedMatch (Static Site + Google Forms)

Bu depo, bir speed dating/quick match mini uygulamasını **ücretsiz olarak** yayınlamanız için hazırlanmıştır.  
Tüm kişisel veriler **Google Forms**'a gönderilir; site sunucusu veri saklamaz.

## Nasıl Kullanılır?

1. `script.js` içindeki GOOGLE FORMS ayarlarını doldurun:
   - `FORM_ACTION_URL`: `https://docs.google.com/forms/d/e/.../formResponse`
   - `entryName`, `entryAge`, `entryBio` vb. input name değerlerini kendi formunuzdan alın.
     - Formun "Gönder" önizleme linkini açın → Sağ tık "İncele" → input `name` değeri `entry.XXXXXXXX` şeklindedir.

2. Yayınlama (GitHub Pages):
   - GitHub'da yeni bir repo oluşturun (örn. `speedmatch`).
   - Bu dosyaları yükleyin (Upload).
   - **Settings → Pages → Branch: main → /(root)** seçin. Kaydedin.
   - 1-2 dakika içinde siteniz `https://kullaniciadiniz.github.io/speedmatch/` adresinde yayında.

   Alternatif: **Netlify**
   - `netlify.com` → New site from Git → Depoyu bağlayın → Build command gerekmez, publish directory `/`.

3. Güvenlik/Veri Koruma
   - Onay kutusu (rıza) olmadan form gönderilemez.
   - Site yalnızca HTTPS üzerinden barınır (GitHub Pages/Netlify otomatik sağlar).
   - Gerekirse Terms/Gizlilik metinlerini düzenleyin.

## Özelleştirme
- `style.css` ile renkleri/temayı değiştirin.
- Soruları `index.html` içindeki `.q` bloklarına yenilerini ekleyerek çoğaltın; `script.js`'te yeni `entry` anahtarları ekleyin.

---

**İletişim:** hedonistbudapest@gmail.com
