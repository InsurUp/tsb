import { redirect } from 'next/navigation';

function page() {
    redirect('/en');
    return (
        <></>
    )
}

export default page