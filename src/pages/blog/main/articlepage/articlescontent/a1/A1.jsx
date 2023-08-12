import React from 'react';
import { ArticleTitle, Date, P, Image, H1, H2, H3, H4, OrderedList, UnorderedList, UnorderedListExtraPadding, OrderedListExtraPadding } from "../../articleComponents/Exports";
import ArticlePage from '../../ArticlePage';
import i1 from "./1.webp";
import i2 from "./2.jpg";
import i3 from "./2-1.jpg";
import i4 from "./3.jpg";
import i5 from "./4.jpg";
import i6 from "./5.jpg";
import i7 from "./6.jpg";
import i8 from "./7.jpg";
import i9 from "./8.jpg";
import i10 from "./9.jpg";
import i11 from "./10.jpg";
import i12 from "./11.jpg";
import i13 from "./12.jpg";
import i14 from "./13.jpg";
import i15 from "./14.jpg";
import i16 from "./15.jpg";
import i17 from "./16.jpg";
import i18 from "./17.jpg";
import i19 from "./18.jpg";
import i20 from "./19.jpg";
import i21 from "./20.jpg";
import i22 from "./21.jpg";
import i23 from "./22.jpg";
import i24 from "./23.jpg";
import i25 from "./24.jpg";
import i26 from "./25.jpg";
import i27 from "./26.jpg";
import i28 from "./27.jpg";
import i29 from "./28.jpg";
import i30 from "./29.jpg";
import i31 from "./30.jpg";
import i32 from "./31.jpg";
import i33 from "./32.jpg";

const A1 = () => {
    return (
        <ArticlePage>
            <ArticleTitle>Telecom Egypt Internship details</ArticleTitle>
            <Date>-10 Aug 2023-</Date>
            <P>
                No doubt, that Optical fibers and its technologies have conveyed the world to a much more fast and secure communication systems, whether it was in terms of transmission, radio and tv services or even the internet.
            </P>
            <P>
                If we look back at the old days, we’d find that the internet speed was incomparable to nowadays’ speeds and clock rates, this is because of new technologies that succeeded to apply optical fiber networks rather than the old copper-based networks.
            </P>
            <P>
                Actually, If we tried to concentrate more we’d find that today’s internet and computer networks depends totally on communication systems and transmission of data using physical networks consisting of copper-based wires or optical fiber cables.
            </P>
            <P>
                The importance of optical fiber networks was highlighted when data has grown enormously, and the demand on high performance and applications such as online games and freelancing, etc. All of this caused users to need much more bandwidth to exchange, upload, and download data. And this can’t be done without a stable and powerful network.
            </P>
            <P>
                Copper cables always used to have a bottleneck when it came to bandwidth and long-distance data transmission. At this point we had to find more powerful cables that’s capable of carrying more bandwidth at higher speed, which is I’m going to demonstrate in this article.
            </P>
            <Image src={i1} alt="A table that shows a comparison between fiber optics and copper" description="comparison between copper and fiber optics cables." />
            <P>
                The basic advantage that makes an optical fiber cable dominate a copper cable is its speed. As we all know that the speed of light is the highest speed in our universe according to Einstein’s relativity, with a constant speed of 300 000 km/s in vacuum, compared to the speed of an electron through a conductor is around 2200 km/s, we find that there is a huge difference, and if we could find a system that depends on the speed of light to transmit data there would be a big movement in the world of data transmission and communication, which is simply “Optical fiber cables”.
            </P>
            <P>
                As we’ve mentioned above, an optical fiber cable depends on the speed of light, which means simply that it conveys light signal.
            </P>
            <P>
                The basic components of an optical communication system are:
            </P>
            <H3>Advantages of Fibre Optics over copper cables</H3>
            <Image src={i2} alt="A figure that shows how signals traverse fibre cables from the sender to the receiver." description="" />
            <OrderedList>
                Greatly increased bandwidth and capacity.///
                Lower signal attenuation (loss).///
                No crosstalk.///
                Lower bit error rates.///
                difficult to tap.///
                No electromagnetic interference.///
                Immunity to Electrical fields.///
                Reduced size and weight cables.///
                Environmental Protection.///
                Resistant to radiation (gamma radiation) and corrosion.///
                Resistant to temperature variant.///
                Low cost.
            </OrderedList>
            <H3>Applications of Optical Fibre</H3>
            <OrderedList>
                Computer networks.///
                Telephone lines.///
                Medical applications.///
                Submerged communication.///
                Power station.///
                Military application.
            </OrderedList>
            <H2>The nature of light</H2>
            <P>Light is usually described in one of three ways:</P>
            <H2>1- Rays</H2>
            <P>In the classical physics that many of us learned at school, light consisted of “rays” that could be reflected and refracted through mirrors and prisms etc. This is a good description as far as it goes but it cannot explain many of the phenomena we make use of in optical communications.</P>
            <Image src={i3} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>2- Photons</H2>
            <P>In many contexts light behaves as though it consists of tiny particles called “photons”.</P>
            <H2>3- Electromagnetic Waves</H2>
            <P>
                All light is a form of electromagnetic energy. But, what is electromagnetic energy? Electromagnetic energy is emitted by any object that has a temperature above absolute zero (–273° C), which means that the atoms in the object are in motion. The electrons orbiting the atoms pick up energy from the motion, and the energy causes them to move to higher orbits, or energy levels. As they drop back to their original energy levels, they release the energy again. The energy takes two forms: an electrical field and a magnetic field, formed at right angles to each other and at right angles to their path of travel, as shown in the Figure
            </P>
            <Image src={i4} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>The wavelengths most commonly used for fibre optics are in the infrared range, with values of 850 nm, 1310 nm, and 1550 nm.</P>
            <P>The spectrum range of these wavelengths provides an important combination of characteristics:</P>
            <P>it is high enough to make high data rates possible, but low enough to require relatively low power for transmission over long distance.</P>
            <Image src={i5} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>Those specific wavelengths have been chosen as they provide the highest data rates at the lowest power consumed.</P>
            <P>The speed of light in a medium depends on the refractive index of that medium, we find that speed of light is changeable depending on the medium</P>
            <P textCenter={true}>v = c / n</P>
            <P>Where: n is the refractive index of the material, c is the velocity of light in vacuum, and v is the light’s velocity through the material.</P>
            <P>And this figure shows light speed through different mediums</P>
            <Image src={i6} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Optical fibre structure:</H2>
            <P>But what actually the structure of an optical fibre cable?</P>
            <P>An optical fibre cable consists of three components:</P>
            <OrderedList>
                Core///
                Cladding///
                Cover
            </OrderedList>
            <UnorderedList>
                The core can be thought of as a very long solid rod made of glass.///
                The cladding is a cover wrapped around the core and it’s also made of glass, with a refractive index smaller than the core.///
                The cover is a protection layer made of plastic to protect outer dust, liquids, and lights.
            </UnorderedList>
            <Image src={i7} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>Notice that the index of the cladding is larger than the index of the cladding. And the figure shown only shows the core and the cladding without the cover.</P>
            <Image src={i8} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H3>The critical angle:</H3>
            <P>As shown in the above figure, the critical angle is the angle by which the light beam should be directed towards the core at the beginning of the cable to stay having total internal reflection, this angle can be calculated by:</P>
            <P textCenter={true}>θc = arcsine(n2 ÷ n1)</P>
            <P>example: if we want to know the critical angle of an optical fibre having a core RI of n1 = 1.51 and a cladding RI of n2 = 1.46:</P>
            <P>θc = arcsine(1.46 ÷ 1.51) = 75.211°</P>
            <H2>Types of Optical fibres:</H2>
            <H3>1- Single-mode Optical Fibres:</H3>
            <P>Single mode is a type of optical fibres used for connecting in long distances. And from the name it has only single mode (one beam of light with single wavelength) the advantages of single-mode optical fibres are as follow:</P>
            <OrderedList>
                It’s used for transmission and communication between different exchanges.///
                It’s used for long distances as it has less attenuation than multi-mode.///
                It carries a single beam of light.///
                The device that produces that beam of light consists basically of a laser diode, and that’s why it’s a single mode.///
                The diameter of a single-mode fibre is 250 μm with a core of 9 μm, a cladding of 125 μm, and a cover of 250 μm.
            </OrderedList>
            <H3>2-  Multi-mode Optical Fibres:</H3>
            <P>Multi-mode optical fibres usually used for short-distance connection, and as illustrated in single-mode it can has multiple modes (beams of light with multiple wavelengths), and the advantages of multi-mode optical fibres are:</P>
            <OrderedList>
                It’s used for transmission and communication only in short distances such as between the cabinet and the client, usually less than 2 kilometres.///
                It’s used for short distances as it has more attenuation than single-mode.///
                It can carry multiple beams of light with multiple wavelengths.///
                The device that produces those beams of light mainly consists of LED(Light Emitting Diode).///
                The diameter of a single-mode fibre is 250 μm with a core of 50-62 μm, and a cover of 250 μm.
            </OrderedList>
            <H2>Attenuation</H2>
            <P>There are three reasons that cause attenuation inside of an optical fibre:</P>
            <H3>Absorption</H3>
            <P>All materials, even the clearest glass, absorb some light. The amount of absorption depends on the type of material and the wavelength of the light passing through it.</P>
            <Image src={i9} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H3>Scattering</H3>
            <P>Scattering is caused by atomic structures and particles in the fibre redirecting light that hits them, as shown in Figure</P>
            <Image src={i10} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H3>Bending Losses</H3>
            <UnorderedList>Micro bending</UnorderedList>
            <Image src={i11} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <UnorderedList>Macro bending</UnorderedList>
            <Image src={i12} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Total Attenuation</H2>
            <P>Total attenuation is the combination of the effects of absorption and scattering in a fibre.</P>
            <P>First, we should define Attenuation, Attenuation in optical fibres means the loss of power depending on different parameters along the cable from the exchange to the client.</P>
            <P>Let’s take some parameters, by which we lose power along the route:</P>
            <OrderedList>
                Every splicing point has an approximate attenuation of 0.1 dB///
                The attenuation per kilometre depends on the wavelength that we’re using.///
                Every 4 kilometre we must have a splicing point, because fibre optics rollers is made with a length of 4 kilometres, therefore we must have a splicing point every 4 kilometres.///
                Every connector on the fibre has a maximum attenuation of 0.5 dB///
                Each ODF (Optical Distribution Frame) has an attenuation of 3.5 dB///
                Finally, every splitter has an attenuation depending on input ports : output ports, for instance:
            </OrderedList>
            <UnorderedListExtraPadding>
                1 : 2 splitter has an attenuation = 3.5 dB///
                1 : 4 splitter has an attenuation = 7 dB///
                1 : 8 splitter has an attenuation = 10.5 dB///
                1 : 16 splitter has an attenuation = 14 dB///
                1 : 32 splitter has an attenuation = 17.5 dB
            </UnorderedListExtraPadding>
            <P>The sum of all of those attenuation values gives us the total attenuation on the network along the cable.</P>
            <H2>Fibre optic connector components</H2>
            <P>The job of a fibre optic connector is to couple a fibre end mechanically to a piece of hardware or to another fibre so that the cores line up accurately and produce the smallest amount of loss.</P>
            <Image src={i13} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Geometry</H2>
            <P>Geometry refers to the shape of the ferrule endface as shown:</P>
            <Image src={i14} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>And there are many types of connectors based on the geometry, and body and cap size.</P>
            <P>Here are the different types of optical fibres’ connectors:</P>
            <Image src={i15} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Optical fibres splicing</H2>
            <P>When we splice two optical fibre cables we should make sure that the two filaments to be spliced have the same characteristics in terms of the core and cladding diameter, the overall diameter, the refractive indexes are the same, and the most important thing, that they should be regular (cleaved with 90 degree angle on the centre line of the cable) and clean from dust and smoke.</P>
            <H3>Optical fibres stripper</H3>
            <P>This equipment is used to strip the optical fibre filaments and remove the cover layer of the two different fibres to be spliced.</P>
            <Image src={i16} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H3>Optical cleaver</H3>
            <P>This equipment is used to cleave the two terminals of the two filaments to be spliced precisely with no cleaving angles, and no bad cleaving.</P>
            <Image src={i17} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>And here is how cleaving can be:</P>
            <Image src={i18} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>The cleaved part after the cover layer should be around 20 mm to 15 mm.</P>
            <H2>Splicing Equipment</H2>
            <P>The goal of any optical fibre splice is to join two fibre ends permanently with as little loss in optical quality as possible.</P>
            <P underline={true}>Optical fibres may be spliced using two methods: mechanical splicing and fusion splicing.</P>
            <H3>Mechanical Splicers</H3>
            <P>Mechanical splicers use a plastic tube with a locking mechanism that holds two fibres against each other to make a splice as shown in fig.</P>
            <Image src={i19} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>The two spliced terminals are hold forever in the shown fixture mechanically.</P>
            <P>This way of splicing has more attenuation than fusion-base splicing and mechanical splicers are usually inexpensive but has less features.</P>
            <H3>Fusion Splicers</H3>
            <P>Fusion splicers create a permanent splice by welding the fibre ends to one another with an electrical arc. The splice is then enclosed in heat-shrink tubing with an oven built into the splicer. The following figure shows a fusion splicer:</P>
            <Image src={i20} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <P>Fusion splicers are usually expensive and cost thousands of dollars, they have much more features than mechanical splicers, they have an automatic mechanism to align the two fibre ends, they have high resolution images and videos for the two ends while splicing, and they can calculate the value of attenuation after splicing as shown.</P>
            <Image src={i21} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Splicing Procedures</H2>
            <P>As fusion splicing is much more effective than mechanical, precise, and common when it comes to single-mode and long-distance communication networks, we’re going to illustrate its procedure in detail:</P>
            <H3>Fusion Splicing Procedure</H3>
            <P>Many fusion splicers contain a feature that automatically positions the fibre ends in proper relationship with each other and with the electrodes for the best possible splice. All that is required of the operator is to prepare the fibres properly and place them in the device.</P>
            <P>To prepare for fusion splicing, as with mechanical splicing, make sure that the work area is clean, dry, and well-lit. Assemble the following tools before you begin:</P>
            <UnorderedListExtraPadding>
                Fusion splicing tool///
                Plastic coating stripper///
                Reagent grade isopropyl alcohol///
                Lint-free wipes///
                Cleaver///
                Heat-shrink tubing
            </UnorderedListExtraPadding>
            <P>Once your materials are assembled, proceed with the following steps:</P>
            <H3>Set-up</H3>
            <UnorderedList listStyleHidden={true}>
                1. Open the fibre buffer tubes and expose and clean the fibres.///
                2. Enable power to the fusion splicer.
            </UnorderedList>
            <H3>Fibre Preparation</H3>
            <UnorderedList listStyleHidden={true}>
                3. Remove from the storage reel or coil the minimum length of fibre required to prepare and splice the fibres—less than one loop if possible.///
                4. Slide the heat-shrink tubing over one fibre end and move it far enough up the fibre to place it out of the way.///
                5. Strip approximately 1 to 2 inches (25 mm to 51 mm) of plastic coating from the fibre using a mechanical stripper.///
                6. Clean the bare glass by pulling the fibre through an alcohol soaked lint-free wipe. This removes any fragments or dirt remaining on the fibre.///
                7. Cleave the fibre to the length specified by the brand of splicer you are using, typically 12–14 mm ± 0.5 mm. Note: The cleaved ends should be within 2° of perpendicular to the fibre axis and should be free of defects.
            </UnorderedList>
            <H3>Splice Assembly</H3>
            <UnorderedList listStyleHidden={true}>
                8. Position one fibre end in the unit near the electrode and close the fibre clamp next to the electrode.///
                9. Close the outer clamp on the fibre.///
                10. Repeat steps 7 and 8 for the other fibre end to be spliced.///
                11. Close the electrode cover.///
                12. Select the appropriate splicing program in the splicer’s computer control and activate it. The splicer performs the necessary calibrations and positioning, performs the splice, and measures the loss across the splice. The operation may be viewed through the video monitor, if available, as shown in Figure
            </UnorderedList>
            <Image src={i22} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H2>Optical fibre measurement</H2>
            <H3>Visible Fault Locator</H3>
            <P>The VFL can be separated or built-in an OTDR (Optical Time Domain Reflectometer). It’s a device that injects a beam of light inside the fibre to track the changes of the beam and locate the micro bendings, or breaks as shown in figures:</P>
            <Image src={i23} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <Image src={i24} alt="A table that shows a comparison between fiber optics and copper" size="50%" description="" />
            <H3>OTDR (Optical Time Domain Reflectometer)</H3>
            <P>Information that can be measured</P>
            <OrderedList>
                The attenuation.///
                The location of faults, by their distance from a point of origin.///
                Attenuation with respect to distance (dB/km).///
                The reflectance of a reflective event or a link.
            </OrderedList>
            <P>The aim of this instrument is to detect, locate and measure events at any location in the fibre link.</P>
            <P>The OTDR depends on the phenomena of scattering of light inside of an optical fibre and generates a relation that describes the behaviour of light inside of the fibre according to relation between the attenuation and the distance as shown:</P>
            <Image src={i25} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <P>When the light reaches the end of the cable, it makes this oscillation that appears at the end of this plot, referring that it’s the end of the fibre cable.</P>
            <H1 textCenter={true}>Plesiochronous digital hierarchy</H1>
            <P>In the early 1970s, digital transmission systems began to appear, utilizing a method known as Pulse Code Modulation (PCM), first proposed in 1937. PCM allowed analog waveforms, such as the human voice, to be represented in binary form.</P>
            <H2>Principles of PDH Multiplexing</H2>
            <P>PDH signals with a higher transmission rate are obtained by multiplexing several lower rate signals.</P>
            <H3>Multiplex Operation</H3>
            <P>Four input signals with the same nominal bit rate are combined to form one multiplex signal and then relayed to the receive side via one common transmission path.</P>
            <H3>De-multiplex Operation</H3>
            <P>On the receive side, the sum signal is again distributed to the corresponding outputs.</P>
            <Image src={i26} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <P>the above figure shows the multiplexing process of CEPT, the standard method of European multiplexing.</P>
            <P>As we shown, the term PDH is an abbreviation for Plesiochronous Digital Hierarchy, it’s a frame that uses a combination of electronic circuits to send data as bit patterns of zeros and ones, it uses a channel of a rate of 1/8000 second to send data, and consisted of 32 slot every slot has 8 bits, and if we put all that together we will find that (8000 sec * 32 slot * 8 bit = 2.048 Mb/s) which is the clock rate of this frame.</P>
            <P>By multiplexing frames with bit rate of 2.048 Mb/s we will be able to get higher rate of PDH as shown in figure.</P>
            <P>This operation should be done at the send side, but when it come do the receive, there should be a reverse operation of demultiplexing to read data.</P>
            <Image src={i27} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="This is the system used by CEPT to get high transfer rate Each bidirectional arrow stands for a PDH frame." />
            <H2>Frame Structure of a PDH Signal</H2>
            <P>Every signal within a CEPT hierarchy level has a specific frame structure which basically consists of the following blocks:</P>
            <Image src={i28} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <H2>Multiplexing / Demultiplexing of PDH Signals</H2>
            <P>Multiplexing in PDH can be done using bit-by-bit multiplexing as shown below:</P>
            <Image src={i29} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <P>As shown the job of a multiplexer is to add the two frames in one frame, this new frame should have a transfer rate of the sum of frames I and II together. The CEPT standard managed to reach the highest rate using multiplexing which is 140 Mb/s.</P>
            <H2>Disadvantages of PDH</H2>
            <P>There were actually some disadvantages of using PDH, first of all the lack of flexibility, simply, we can’t extract a specific lower rate if we want for instance, to provide a customer with a single 2 Mb/s channel. In order to access a single 2 Mb/s line the 140 Mb/s channel must be completely demultiplexed to its 64 constituent 2 Mb/s lines via 34 and 8 Mbit/s. Once the required 2 Mb/s line has been identified and extracted, the channels must then be multiplexed back up to 140 Mbit/s.</P>
            <P>Another limitation of the PDH is its inability to provide different Topologies, as it only can provide a very basic point-to-point topology.</P>
            <P>Last limitation, it was not synchronous, and consequently it had some issues when it came to multiplexing frames together, as the multiplexer supposes that all its inputs are being operated at the same time, more clearly, the last bit on the right inside every frame must be added to the equivalent bit in the other frame. We could solve that by using a container that has a bigger rate than all of the input frames, and this container’s job is to stuff all the bits resulting from the difference between this container and every frame, those bits are called stuffing bits, and PDH is highly dependent on stuffing bits. And this us another issue, because stuffing bits are filled with nonsense which don’t have any role at the demultiplexing end, except for the taking space inside of the frame.</P>
            <H1>Synchronous Digital Hierarchy</H1>
            <P>The main feature of a Synchronous Digital Hierarchy system is the ability of being synchronous, and this is a feature that PDH couldn’t achieve, as every frame in PDH has its own clock rate, or in other words, it’s own clock generator, that’s why PDH was suffering from different clock rates.</P>
            <P>But if we could create a system that has a reference clock generator, we would have a uniform clock rate for all frames to be multiplexed, therefore, we’d be able to get rid of the stuffing bits.</P>
            <P>Another advantage of SDH system, is its structure, it consists of 9 rows every row has 270 slot, and each slot has a 8 bits. Therefore, the total number of bits in SDH frame = 9 * 270 *8 = 19440 bit</P>
            <P>So far so good,  let’s now try to find the base rate of this frame. As we know the frame is just like a PDH frame, it’s repeated 8000 per second, so if we multiply the number of bits by 19440 * 8000 = 155.52 Mb/s.</P>
            <P>The ITU (International Telecommunication Union) has specified a base signal, the STM-1 (Synchronous Transport Module - 1) with 155,520 Mb/s. All multiplex levels in the SDH are positive integer multiples of this base signal "STM-1" as shown below:</P>
            <Image src={i30} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <P>Those simply are the rates of an SDH frame, beginning from the base rate, going all the way up by multiplexing frames together.</P>
            <P>Note: the STM-4 is 4 multiples of a STM-1 frame, likewise, the STM-64 is 16 multiple of STM-4 and vice versa.</P>
            <P>The two-dimensional representation of an STM-1 frame includes 9 rows with 270 bytes each as shown:</P>
            <Image src={i31} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <P>The STM-1 frame consists of three blocks:</P>
            <Image src={i32} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="" />
            <UnorderedListExtraPadding>
                Pointer (PTR): indicates the start address of the tributary information.///
                Section OverHead (SOH): additional transmission capacity.///
                Payload: tributary information.
            </UnorderedListExtraPadding>
            <P>The “Section OverHead” and Pointer are for management, and the payload are for data.</P>
            <P>The frames are transmitted in intervals of 125 μs. The STM-1 frame is repeated (1s: 125 μs) = 8000 times per second. Thus, every byte in an STM-1 frame has a transmission capacity of 8000 * 8 = 64 kb/s, as we’ve cited before in the PDH frame.</P>
            <P>Another advantage of SDH over PDH, that it uses byte-by-byte multiplexing, in contrast to PDH that uses bit-by-bit multiplexing.</P>
            <P> For a better understanding, the generation of an STM-4 frame was explained here with only 2 STM-1 frames, although in practice 4 STM-1 frames are multiplexed.</P>
            <Image src={i33} alt="A table that shows a comparison between fiber optics and copper" size="75%" description="Byte-by-byte multiplexing." />
            <H2>Summary</H2>
            <H2>Principles of PDH multiplexing</H2>
            <UnorderedList listStyleHidden={true}>
                Bit rates in accordance with CEPT: 2 Mbit/s, 8 Mbit/s, 34 Mbit/s and 140 Mbit/s.///
                Every signal has a separate frame structure.///
                PDH depends on Bit-by-bit multiplexing.///
                No frame synchronization of the tributary signal inputs.///
                The input signals of the tributaries are plesiochronous to each other, in other words. their clock rates have the same nominal value, but there is, however, a slight amount of variation between the two.
            </UnorderedList>
            <H2>Principles of SDH multiplexing</H2>
            <UnorderedList listStyleHidden={true}>
                Bit rates exceeding 140 Mbit/s are standardized on a worldwide basis, unlike PDH.///
                Both synchronous and plesiochronous operation is possible.///
                All current PDH signals (CEPT/ANSI) can be transmitted within the SDH (except for 8 Mb/s).///
                The "Section OverHead" bytes provide a high transmission capacity for monitoring, maintenance and control tasks.///
                High-level multiplex signals are integer multiples of the basic bit rate (155,520 Mb/s).///
                For the first time, the optical line code is standardized worldwide.
            </UnorderedList>
        </ArticlePage>
    )
}

export default A1;