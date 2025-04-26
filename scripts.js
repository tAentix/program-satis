 JSON verisi (gerçek kullanımda bu veriyi bir dosyadan alacağız)
const products = [
    {
        isim Auto Clicker v1.0,
        açıklama Hızlı ve kolay mouse tıklama aracı.,
        fiyat Ücretsiz,
        indir #
    },
    {
        isim FPS Booster,
        açıklama Bilgisayarını oyunlar için optimize eder.,
        fiyat 10 TL,
        indir #
    }
];

 Ürünleri sayfaya ekleyen fonksiyon
function loadProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';  İlk önce mevcut ürünleri temizle

    products.forEach(product = {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            h3${product.isim}h3
            p${product.açıklama}p
            pstrong${product.fiyat}strongp
            button onclick=window.location.href='${product.indir}'Satın Albutton
        `;

        container.appendChild(productDiv);
    });
}

 Sayfa yüklendiğinde ürünleri yükle
window.onload = loadProducts;