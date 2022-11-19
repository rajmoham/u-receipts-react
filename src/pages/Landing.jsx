import React from 'react'
import Navigation from '../components/Navigation.jsx'
import LandingContent from '../components/LandingContent.jsx'
import Highlight from '../components/Highlight.jsx'

function Landing() {
    return (
        <>
            <Navigation />
            <LandingContent />
            <section id='highlights'>
                <Highlight
                    title="Reducing Deforestation"
                    description="Every year in the UK 11 billion till receipts are printed, cutting down trees that would absorb over 60 million kilograms of carbon dioxide,
                    meaning 0.01% of the UKs carbon footprint comes from these receipts."
                    image="https://www.plt.org/wp-content/uploads/2017/03/facts-trees-world-500x500.png" 
                    reverse={false}/>

                <Highlight
                    title="Toxicity"
                    description="Till receipts are made using thermal paper, which are coated in a substance called bisphenol A and S (BPA and BPS).
                    These substances are banned from plastic ass they are extremely toxic when ingested and hence also cant be recycled and must be thrown away in landfills,
                    this means that companies are wasting money and resources without reason when our application can help solve this issue."
                    image="https://thumbor.granitemedia.com/img/DwRNY8xVmpuB52tLecXApZf-zjY=/500x500/filters:format(webp):quality(80)/granite-web-prod/1b/d1/1bd1048c41624d9fbf54fb4d3a0b2b8c.jpeg"
                    reverse={true}/>
                <Highlight
                    title="Untapped Market"
                    description="Some banks, such as Monzo, Barclays and HSBC  have already started to utilise something similar to U-Receipts, however these only show the price,
                    store and time for  purchases made using your phone and must be purchases under £30. We hope to make a universal platform to be used by all stores and aim for a paperless retail community."
                    image="https://www.strath.ac.uk/media/1newwebsite/departmentsubject/huntercentreforentrepreneurship/engagement.jpg" 
                    reverse={false}/>
            </section>
        </>
    )
}

export default Landing