const Footer = () => {

    const CurrentYear:number = new Date().getFullYear();

    return(
        <>
            <footer className="bg-gray-700">
                <div className="text-white text-center py-4">
                    Copyright © {CurrentYear}, Coding Factory 7. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer