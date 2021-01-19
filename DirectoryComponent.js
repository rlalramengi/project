
//import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';

import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                campsites: [
                    {
                        id: 0,
                        name: 'Pathian Thu',
                        image: 'assets/images/001.jpg',
                        elevation: 1233,
                        description: "Tisa duhzâwng chuan thlarau lam thil a kalh tlat a, Thlarau lahin tisa lam thil chu a kalh tlat bawk a, an inkalh tawn tlat avângin in tih duh eng mah in ti thei ṭhîn lo va ni."
                    },
                    {
                      id: 1,
                      name: 'Pathian Thu ',
                      image: 'assets/images/002.jpg',
                      elevation: 877,
                      description: "Engah mah mangang suh u, eng thilah pawh ṭawngṭaiin, in mamawh chu Pathian hnênah thlen ula, lâwmthu hril zêl chungin dîl rawh u."
                    },
                    {
                        id: 2,
                        name: 'Pathian Thu',
                        image: 'assets/images/003.jpg',
                        elevation: 2901,
                        description: "Kei erawh chuan fak hla sain Inthawina ka hlân ang che, Ka thutiam chu ka hlen ang, Chhandamtu chu Lalpa a ni si a, tiin."
                    },
                    {
                        id: 3,
                        name: 'Pathian Thu',
                        image: 'assets/images/004.jpg',
                        elevation: 42,
                        description: "Thuthlung thar a sawi tâk avângin thuthlung hmasa chu a tihlui ta a, lo upaa hlui ta chu a bo thuai dâwn a ni."
                    }
                ]
        };
    }
    

        render() {
            const directory = this.state.campsites.map(campsite => {
                return (
                    <div className="col">
                        <img src={campsite.image} alt={campsite.name} />
                        <h2>{campsite.name}</h2>
                        <p>{campsite.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {directory}
                    </div>
                </div>
            );
        }
    
}
export default Directory;