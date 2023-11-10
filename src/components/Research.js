const Research = () => {
    return (
        <main>
            <section className="antique">
                <h1>Research Projects</h1>
                <p>Explore a growing collection of infographics and publications across several academic disciplines in STEM and the social sciences.</p>
            </section>
            <section className="cream">
                <h1>Independent Research</h1>
                <p>Haynes, J.P. (2023) <i>"Dynamics of Migration and Population Change: Understanding the Influence of Education, Development, and Social Services"</i></p>
                <ul><li><a href="/Global Development & Demography Paper.pdf" target="_blank" rel="noopener noreferrer"><button className="button">View PDF</button></a></li></ul>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section className="antique">
                <h1>Undergraduate Capstone</h1>
                <p>Haynes, J.P. (2022) <i>"Global Society and Contemporary Immigration to Western Europe: Effects on Identity, Demographics, and Cultural Expression"</i></p>
                {/* Normally "Undergraduate Capstone.pdf" would be here */}
                <ul><li><a href="/Global Development & Demography Paper.pdf" target="_blank" rel="noopener noreferrer"><button className="button">View PDF</button></a></li></ul>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </main>
    )
}

export default Research
