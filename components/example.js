                const reader = new FileReader()
                const ref = "users/" + firebase.auth().currentUser.uid + "/ProfilImgUrl" + ".jpg"
                var metadata = {
                    contentType: 'image/jpeg',
                };
    
                if (imageIsAdded == true) {
                    SignupUser({
                        variables: {
                            user: {
                                "website": userWebsite,
                                "display_name": userFirstName + ' ' + userLastName,
                                "email": userEmail,
                                "adresses": [{
                                    "title": userAdress + ", " + userCity + ", " + userZip,
                                    "is_chosed": true
                                }],
                                "first_name": userFirstName,
                                "last_name": userLastName,
                                "phonenumber": prevUser.phoneNumber,
                                "firebaseUID": prevUser.uid,
                                "country": userCountry,
                                "birth_date": {
                                    "day": userBirthDay.getDay(),
                                    "month": userBirthDay.getMonth(),
                                    "year": userBirthDay.getFullYear(),
                                    "iso": userBirthDay.toISOString()
                                }
                            }
                        }
                    }).then(() => {
                        dispatch({
                            payload: {
                                type: "SUCCESS",
                                title: "Signup",
                                message: "Bravo, vous etes inscrit"
                            }
                        })
    
                    }).catch((err) => {
                        dispatch({
                            payload: {
                                type: "ERROR",
                                title: "Signup",
                                message: "Une erreur est survenu, veuillez reessayer"
                            }
                        })
                    })
                } else {
                    reader.onabort = () => console.log('file reading was aborted')
                    reader.onerror = () => console.log('file reading has failed')
                    reader.onload = () => {
                        const binaryStr = reader.result
                        storage.ref(ref).put(binaryStr, metadata).then(async () => {
                            const url = await storage.ref(ref).getDownloadURL().catch(err => { throw err })
                            SignupUser({
                                variables: {
                                    user: {
                                        "website": userWebsite,
                                        "display_name": userFirstName + ' ' + userLastName,
                                        "email": userEmail,
                                        "adresses": [{
                                            "title": userAdress + ", " + userCity + ", " + userZip,
                                            "is_chosed": true
                                        }],
                                        "first_name": userFirstName,
                                        "last_name": userLastName,
                                        "phonenumber": prevUser.phoneNumber,
                                        "photoUrl": url,
                                        "firebaseUID": prevUser.uid,
                                        "country": userCountry,
                                        "birth_date": {
                                            "day": userBirthDay.getDay(),
                                            "month": userBirthDay.getMonth(),
                                            "year": userBirthDay.getFullYear(),
                                            "iso": userBirthDay.toISOString()
                                        }
                                    }
                                }
                            }).then(() => {
                                dispatch({
                                    payload: {
                                        type: "SUCCESS",
                                        title: "Signup",
                                        message: "Bravo, vous etes inscrit"
                                    }
                                })
    
                            }).catch((err) => {
                                dispatch({
                                    payload: {
                                        type: "ERROR",
                                        title: "Signup",
                                        message: err.message
                                    }
                                })
                            })
                        })
    
                    }
                    reader.readAsArrayBuffer(brutFile)
                }