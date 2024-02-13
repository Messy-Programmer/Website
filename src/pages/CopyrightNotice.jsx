import React from 'react'

const CopyrightNotice = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div class="flex w-full items-center justify-between px-10">
        <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold mb-10 flex justify-center p-5">
                Copyright Notice
            </h1>

            <p class="mb-4">
                <span class="font-bold">&copy;  {currentYear} Messy Programmer. All rights reserved.</span>
            </p>

            <p class="mb-4">
                The content, design, graphics, and other materials on this website are protected by copyright law and may not be reproduced, distributed, transmitted, displayed, or otherwise used without the prior written permission of Messy Programmer.
            </p>

            <p class="mb-4">
                This website serves as a landing page for Messy Programmer and does not necessarily represent the provision of our main services. Our main services are provided directly to clients through other means.
            </p>

            <p class="mb-4">
                Any unauthorized use of the materials on this website may violate copyright, trademark, and other applicable laws and could result in legal consequences.
            </p>

            <p class="mb-4">
                For inquiries regarding the use of materials from this website or to inquire about our services, please contact us at <a href="mailto:contact@messyprogrammer.in" class="text-blue-500">contact@messyprogrammer.in</a>.
            </p>
        </div>
    </div>
  )
}

export default CopyrightNotice