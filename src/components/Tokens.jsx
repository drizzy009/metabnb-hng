import { mbtoken, metamask, opensea } from "../assets"

const Tokens = () => {
  return (
    <section className="sm:mx-0 sm:py-4 bg-lightPurple ">
        <div className="flex justify-around">
            <img className="sm:w-[14%] w-[26%]" src={mbtoken} alt="mbtoken" />
            <img className="sm:w-[14%] w-[26%]" src={metamask} alt="mbtoken" />
            <img className="sm:w-[14%] w-[26%]" src={opensea} alt="mbtoken" />
        </div>
    </section>
  )
}

export default Tokens