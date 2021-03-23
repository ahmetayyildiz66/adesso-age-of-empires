# Adesso Challenge - Age Of Empires

Sizden Age of Empires Birimlerinin listelendiği bir angular uygulaması istiyoruz.

 

# Development koşulları:

 

Proje Vue ya da React (Son sürüm) ile geliştirilecek
State Management için Vuex ya da Redux (Saga) kullanılmalı.
Router kullanılacak.
Stil olarak herhangi bir library kullanılabilir.
Stil dili olarak scss kullanılacak.
Tslint ya da Eslint kullanılacak (default kuralları geçmesi yeterli)
 

 Sayfalar:

 

Anasayfa
Birimler sayfası
Birim detay sayfası
 

# Anasayfa

 

Kullanıcı anasayfada sadece bir resim görecek. İstediğiniz bir resmi kullanabilirsiniz. Sağ üst köşede mockup’ta görünen linkler olacak.

 

# Birimler Sayfası

 

Birimler sayfasında kullanıcı json dosyasındaki birimleri listeleyecek.

Sağ üst köşede mockup'ta görünen olacak.

Birimler listesinin üzerinde filtreleme alanları olacak.

İki tür filtreleme olacak. Filtreler combine edilebilecek.

 

# Ages Filtresi:

Toplam 4 adet çağ var ve bu çağlar sırası ile “Dark”, “Feudal”, “Castle” ve “Imperial”.

Her birimin minimum gereksinim duyduğu bir çağ var.

Kullanıcının seçtiği çağ’a göre liste filtrelenecek.

Kullanıcı isterse “All” opsiyonunu seçip minimum çağ gereksinimini discard edip tüm birimleri listeletebilir.

Default olarak “All” opsiyonu seçili gelecek.

 

# Costs Filtresi:

Birimler minimum maksimum costlara göre filtrelenebilecek.

Cost tipleri: “Food”, “Wood” ve “Gold”

Kullanıcı isterse cost türlerinin yanındaki checkbox’ları check ederek, cost tipine göre filtrelemeyi kullanabilecek.

Default olarak tüm tipler unchecked gelecek.

Kullanıcı bir cost tipini check ettiğinde yanındaki range selector enable edilecek ve kullanıcı bir cost aralığı seçebilecek.

Seçilen cost aralığına göre birimler filtrelenecek.

Aynı anda birden fazla cost tipi aktif edilebilir.

Cost range’i minimum 0, maksimum 200 Dür.

 

# Liste:

Birimler bir tabloda listelenecek.

Kullanıcının değiştirdiği filtrelere göre liste anlık güncellenecek.

Kullanıcı listedeki bir birime tıkladığında üzerine tıkladığı birimin detay sayfasına yönlendirilecek.

 

# Birim Detay Sayfası

 

Kullanıcının seçtiği birimin detayları bu sayfada gösterilecek.

Mockup’ta belirtilen birim detayları bu sayfada gösterilecek

# Deployed App
https://nostalgic-perlman-1c0882.netlify.app

# Missing part

Projede Vue 3, Vuex@4.., Vue Router kullandım. Vuex'i modular olarak yazdım fakat Vue 3 için var olan Vue Test Utils'i Vuex ile birlikte kullanamadım. Vue 2 ile olan methodlarda hata aldım. Bu sebeple test kısmını yok sayabilirsiniz. Konfigurasyon'u vs. tamam örnek bir App.spec.js de oluşturdum. Fakat yukarıdaki bahsettiğim sebepten ve Vue 3 için yazılmış olan Vue Test Utils'in dökümantasyonu çok eksik olduğu için yapamadım. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
