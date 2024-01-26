document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            updateContent(this.innerText.trim());
        });
    });

    if (resources && resources.length > 0) {
        updateContent(resources[0].category);
    }
});

function updateContent(category) {
    const resource = resources.find(res => res.category.toLowerCase() === category.toLowerCase());

    if (resource) {
        document.querySelector('.category').innerText = resource.category;
        document.getElementById('text').innerText = resource.text;

        const linksUl = document.querySelector('main article nav ul');
        linksUl.innerHTML = '';

        resource.sources.forEach(source => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = source.url;
            a.innerText = source.title;
            a.target = '_blank';
            li.appendChild(a);
            linksUl.appendChild(li);
        });
    }
}
