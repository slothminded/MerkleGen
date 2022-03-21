export default function ArrayBox(props) {
    return (
        <>

            <div class="block p-6 bg-darkSC font-pt-mono  text-darkText border-solid border-2 border-bordercolor ">


                <div class="mb-6">

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-darkText-900 ">WHITELIST ARRAY</label>
                        <textarea type="text" id="email" class="bg-black text-darkText-900 border border-darkText-300  text-sm block w-full p-2.5 h-40 rounded" placeholder="['0x3877238B64Db8DfA7Ca84aaE03b26e249D9414fE']" required 
                        //Onchange
                        onChange={(e) => {
                            // console.log(e.target.value);
                            props.setAddresses(e.target.value);
                        }}

                        
                        />
                    </div>
                </div>
            </div>
        </>

    )
}