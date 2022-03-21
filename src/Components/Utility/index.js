
import { useState, useEffect } from 'react';
import { getRoot, verify } from '../../handlers'
import { toast } from 'react-toastify';
function Utility(props) {

    const [hash, setHash] = useState('');


    function handleCopy() {
        if (!hash) {
            toast.dark("🕸 No hash found", {
                toastClassName: "bg-darkText font-pt-mono text-darkText  ",
                className: 'bg-darkText font-pt-mono text-darkText border-solid border-2 border-bordercolor',
                bodyClassName: "bg-darkText font-pt-mono text-darkText ",
                progressClassName: "bg-darkText font-pt-mono text-darkText ",

            });
        }
        else {
            navigator.clipboard.writeText(hash);
            toast.dark("✨ Copied to clipboard", {
                toastClassName: "bg-darkText font-pt-mono text-darkText  ",
                className: 'bg-darkText font-pt-mono text-darkText border-solid border-2 border-bordercolor',
                bodyClassName: "bg-darkText font-pt-mono text-darkText ",
                progressClassName: "bg-darkText font-pt-mono text-darkText ",
            });


        }
    }


    useEffect(() => {
        try {
            let jsonData = JSON.parse(props.addresses);

            setHash("0x" + getRoot(jsonData));
            props.setHash("0x" + getRoot(jsonData));
        }
        catch (err) {
            console.log(err);
            console.log("Non Jsonized", props.addresses)
        }

        //setHash(getRoot(props.addresses))
    }, [props.addresses]);


    return (
        <>

            <div class="block p-6 bg-darkSC font-pt-mono  text-darkText border-solid border-2 border-bordercolor ">


                <div class="mb-6">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-darkText-900 ">Merkle Root Hash</label>
                        <input type="text" id="email" class="bg-black text-darkText-900 border border-darkText-300  text-sm block w-full p-2.5 " placeholder={hash} required disabled />
                        <button class="mt-2 bg-transparent hover:bg-blue-500 text-darkText-700 font-medium hover:text-white py-2 px-4 border border-bordercolor "
                            onClick={handleCopy}

                        >
                            Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}


function Clipboard(props) {
    const [toCheck, settoCheck] = useState("");
    const [verifed, setVerify] = useState({});

    useEffect(() => {
        if (props.addresses) {
            try {
                let parsedAddresses = JSON.parse(props.addresses);
                let data = (verify(parsedAddresses, toCheck));
                setVerify(data);
                console.log(verifed);
            }
            catch (err) {
                console.log(err);
            }

        }
        

    }, [toCheck, props.addresses]);

    return (
        <>
            <div class="block p-6 bg-darkSC font-pt-mono  text-darkText border-solid border-2 border-bordercolor ">


                <div class="mb-6">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-darkText-900 ">Verify</label>
                        <input type="text" id="email" class="bg-black text-darkText-900 border border-darkText-300  text-sm block w-full p-2.5 " placeholder="Element" required

                            onChange={(e) => {
                                settoCheck(e.target.value);
                            }}

                        />

                        <div class="p-4 mt-5 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 text-left" role="alert">
                            Hash : {props.hash} <br></br>
                            To Check : {toCheck} <br></br>
                            {toCheck && verifed.leaf &&
                                <>
                                    Verified : {verifed.verify.toString()} <br></br>
                                    {/* Proof : {verifed.proof} <br></br> */}
                                    Leaf : {verifed.leaf} <br></br>
                                </>
                            }



                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


function Checker() {
    return (
        <>
            <div class="block p-6 bg-darkSC font-pt-mono  text-darkText border-solid border-2 border-bordercolor ">


                <div class="mb-6">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-darkText-900 ">Clipboard</label>
                        <button class="bg-transparent hover:bg-blue-500 text-darkText-700 font-medium hover:text-white py-2 px-4 border border-bordercolor ">
                            Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}



export { Utility, Clipboard, Checker };