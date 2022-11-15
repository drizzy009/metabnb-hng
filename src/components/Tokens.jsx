import { mbtoken, metamask, opensea } from "../assets"

const Tokens = () => {
  return (
    <section className="bg-lightPurple mx-0 py-4">
        <div className="flex justify-around">
            <img src={mbtoken} alt="mbtoken" />
            <img src={metamask} alt="mbtoken" />
            <img src={opensea} alt="mbtoken" />
        </div>
    </section>
  )
}

export default Tokens