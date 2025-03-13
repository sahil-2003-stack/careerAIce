
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto '>
                <h1>
                    Your AI Careee Coach For
                    <br />
                    Professional Success
                </h1>
                <p>
                    Advance your career with personalized guidance , interview prep and
                    AI-powered toools for job Success.
                </p>
            </div>
            <div>
                <Link href="/dashboard">
                    <Button size="large" className="px-8">
                        Get started</Button>
                </Link>
                <Link href="https://www.youtube.com/roadsidecoder">
                    <Button size="large" className="px-8" variant="outline">
                        watch demo</Button>
                </Link>
            </div>
            <div>
                <Image
                    src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Banner Sensai"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                />
            </div>
        </div>
        </section>
    );
};

export default HeroSection;