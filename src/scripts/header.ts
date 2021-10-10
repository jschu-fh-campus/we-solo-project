export default function setupHeader() {
    if (document.getElementById('header') != null) {
        const header = document.getElementById('header');
        header!.classList.add('pl-6', 'pt-6');
        header!.innerHTML = `
        <h1 class="text-4xl">PokéAPI Demo</h1>
        <nav class="h-full flex items-center justify-between pt-4 pb-12">
            <ul class="h-full flex justify-end items-center">
                <li class="pr-3 bg-yellow-300"><a href="index.html">Items</a></li>
                <li class="pr-3 bg-yellow-300"><a href="random-form.html">Random Form</a></li>
                <li class="pr-3 bg-yellow-300"><a href="github.html">Github</a></li>
            </ul>
        </nav>`;
    }
}