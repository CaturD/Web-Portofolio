# Website portofolio pribadi yang dibuat sebagai submission Dicoding menggunakan HTML, CSS, dan JavaScript.

## Cara Menjalankan

1. **Download atau clone** seluruh file proyek ini ke komputer Anda.
2. Buat folder bernama `images` di dalam folder proyek.
3. Pindahkan semua file gambar ke dalam folder `images/`.
4. Buka file `index.html` menggunakan browser (Chrome, Firefox, Edge, dll).
5. Website akan langsung tampil tanpa perlu server khusus.

## Kriteria Submission

1. Terdapat elemen `<header>`, `<nav>`, `<footer>`, `<main>`, `<article>`, dan `<aside>` |
2. Elemen `<nav>` memiliki `<a>` yang mengarah ke profil Dicoding |
3. Menampilkan foto di elemen `<aside>` |
4. Layout menggunakan Flexbox, bukan float |
5. Tema bebas |

### Detail Penerapan

**1 - Elemen HTML Semantik**

Semua elemen wajib ada di `index.html`:
- `<header>` - Navbar fixed di bagian atas halaman
- `<nav>` - Menu navigasi di dalam header
- `<main>` - Pembungkus semua section utama
- `<article>` - Setiap pengalaman di section Experience
- `<aside>` - Foto profil di section Hero + Skill bars di section About
- `<footer>` - Bagian bawah halaman berisi copyright

**2 - Link Dicoding di Nav**

```html
<a href="https://www.dicoding.com/users/caturdianta"
   target="_blank"
   rel="noopener noreferrer"
   class="dicoding-link">Dicoding ↗</a>
```

**3 - Foto di `<aside>`**

```html
<aside class="hero-photo">
  <div class="photo-ring">
    <img src="images/profil.jpg" alt="Caturdianta" />
  </div>
</aside>

<aside class="skills-aside"> ... </aside>
```

**4 - Flexbox Layout**

Seluruh layout menggunakan `display: flex`. Tidak ada `float` sama sekali.

```css
nav          { display: flex; justify-content: space-between; }
.hero-grid   { display: flex; align-items: center; gap: 4rem; }
.about-grid  { display: flex; gap: 4rem; }
.exp-grid    { display: flex; flex-wrap: wrap; gap: 2rem; }
.footer-inner{ display: flex; justify-content: center; }
```
---

## Tools yang Digunakan

- **HTML5** - Struktur semantik
- **CSS3** - Flexbox, CSS Variables, Animations, Filter
- **JavaScript** - IntersectionObserver, DOM manipulation
- **Google Fonts** - Syne (body) + Space Mono (monospace/code)

---

## Profil

**Nama:** I Ketut Diatmika Caturdianta  
**Universitas:** Universitas Udayana
**Program Studi:** Teknologi Informasi  
**Profil Dicoding:** [dicoding.com/users/caturdianta](https://www.dicoding.com/users/caturdianta)
**Live Site:** https://caturd.github.io/Portfolio/

---

*© | 2025 Ketut Diatmika Caturdianta.*
