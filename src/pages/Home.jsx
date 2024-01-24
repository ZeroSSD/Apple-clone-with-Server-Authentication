import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports'
Amplify.configure(awsExports);


// Amplify.configure({
//     Auth:{
//         region: "us-east-1",
//         userPoolId: "us-east-1_NWxX4lcJY",
//         clientID: "16nnubrqjle7ihhukuttnmcge6"
//     }
// })

const Home=()=>{

    return(
        <Authenticator>
            {({ signOut, user }) => (
                <>
                <Header />
                <Info />
                <Section data={productsSection.iphonePro}/>
                <Section data={productsSection.iphone}/>
                <Section data={productsSection.macbookpro}/>
                <Products />
                </>
            )}
        </Authenticator>

    )
}

export default Home;