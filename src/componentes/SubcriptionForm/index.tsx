export const SubcriptionForm = () => {
    return (
        <form className="flex flex-col">
            <label htmlFor="newsletter">Inscreva-se em nosso e-mail</label>
            <input type="email" id="newsletter" name="newsletter" placeholder="email@email.com" className="rounded-[30px] bg-[#ffffff] placeholder-gray-500 py-3 px-5" />
        </form>
    )
}