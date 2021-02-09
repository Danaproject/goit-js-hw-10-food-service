const images = document.querySelectorAll('.card__image');

const options = {
    rootMargin: '100px',
};
const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
        }
    });
};
const io = new IntersectionObserver(onEntry, options);
images.forEach(image => io.observe(image));


// import to index.js 
// import './lazy-load';

// change src to data-src in <img/> (menu-item.hbs)

// https://www.npmjs.com/package/intersection-observer
// https://www.npmjs.com/package/intersection-observer-polyfill