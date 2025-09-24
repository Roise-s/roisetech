
const TAndCFooter = () => {
  return (
    <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Termination & Cancellation</h2>
                <p className="mb-8 font-light lg:mb-16 sm:text-xl text-gray-400">Only client may terminate the project with written notice. Deposits are non-refundable once work has started. If a client cancels after work is underway, payment will be required for completed work up to that point.</p>
            </div> 
            <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r bg-gray-800 border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                        <h3 className="text-lg font-semibold text-white">Limitation of Liability</h3>
                        <p className="my-4">I am not responsible for indirect or consequential damages such as lost profits, lost data, downtime, or business interruptions resulting from the use of my services.</p>
                        <p className="my-4">I do not guarantee specific results, business outcomes, or performance metrics from any work delivered.</p>
                        <p className="my-4">My total liability to a client for any claims arising from my services is limited to the amount paid for the project.</p>
                    </blockquote>  
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 bg-gray-800 border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                        <h3 className="text-lg font-semibold text-white">Governing Law</h3>
                        <p className="my-4">These Terms of Service are governed by the laws of South Africa.</p>
                        <p className="my-4">Any legal disputes will be handled under South African jurisdiction, and both parties agree to submit to the courts of South Africa for any disputes arising from these terms.</p>
                    </blockquote>  
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center border-b lg:border-b-0 md:p-12 lg:border-r bg-gray-800 border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                        <h3 className="text-lg font-semibold text-white">Dispute Resolution</h3>
                        <p className="my-4">Clients and I will attempt to resolve disputes informally through good faith communication.</p>
                        <p className="my-4">If a dispute cannot be resolved informally, both parties agree to engage in mediation or arbitration before pursuing legal action.</p>
                    </blockquote>   
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center md:p-12 bg-gray-800 border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <p className="my-4">For any questions or concerns regarding these Terms of Service, project details, or services, you can contact me at:</p>
                        <p className="my-4">+27 74 763 9005</p>
                    </blockquote>    
                </figure>
            </div>
        </div>
    </section>
  )
}

export default TAndCFooter
