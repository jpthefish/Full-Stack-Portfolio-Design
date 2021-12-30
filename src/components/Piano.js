const Piano = () => {
    const currentTime = new Date();

    return (
        <main>
            <section className="antique">
                <h1>{currentTime.getUTCHours() < 6 ? 'Piano Good Evening' : 'Piano Hello Guest'}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos non officia. Voluptatum dolore nulla expedita, vel obcaecati officia itaque
                ducimus, corporis natus fuga dolorum id fugiat, tempora quos perferendis?</p>
            </section>
        </main>
    )
}

export default Piano
