const input = document.getElementById('image-upload');

const handleUpload = () => {
    document.getElementById('image-upload').click()
}

input.addEventListener('change', (event) => {
    const images = event.target.files;

    for (const image of images) {
        const reader = new FileReader();

        reader.readAsDataURL(image);

        reader.addEventListener('load', () => {
            const imagesArray = localStorage.getItem('images');
            let images = [];

            if (imagesArray) {
                images = [...JSON.parse(imagesArray)];

                images.push(reader.result);
            } else {
                images.push(reader.result);
            }

            localStorage.setItem('images', JSON.stringify(images));
        });
    }
});
