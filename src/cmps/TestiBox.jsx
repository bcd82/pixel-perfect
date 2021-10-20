import quotes from "../assets/imgs/icon-quotes.svg";

export  function TestiBox({data}) {
    return (
        <article className="testi-box flex column">
        <img src={quotes} alt="quote" className="quotes" />
        <p className="txt">{data.txt}
        </p>
        <p className="name">{data.name}</p>
        <p className="title">{data.title}</p>
        <img className="avatar" alt="avatar" src={data.imgSrc}/>
      </article>

    )
}
