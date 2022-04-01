const AboutUs = () => {

    const titles = ["Who We are?", "Why are We doing this?", "Were are We?"]

    const body = "Nullam in sagittis ex. Aliquam at cursus felis. Nullam urna nisl, imperdiet non placerat vel, efficitur et mi. Suspendisse fringilla nisl et elit dapibus vehicula. Integer neque quam, pretium id suscipit non, eleifend a enim. Phasellus mollis felis quis lorem varius porttitor. Etiam viverra ultricies mauris sit amet venenatis. Mauris dolor tortor, ultrices sit amet velit at, varius pulvinar arcu. Nam sed auctor diam, ut luctus arcu. Duis vestibulum ultricies ligula."

    return (
        <section className="about--main">
            {titles.map(e => {
                return (
                    <div>
                        <p className="about--title">{e}</p>
                        <p className="about--body">{body}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default AboutUs