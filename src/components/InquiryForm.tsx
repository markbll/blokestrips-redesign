import React from 'react';
import { Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Textarea } from '@blinkdotnew/ui';
import { motion } from 'framer-motion';
import { Send, Zap, CreditCard, Shirt, ListChecks } from 'lucide-react';

export const InquiryForm = () => {
  return (
    <section id="register" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block italic">Get Started</span>
            <h2 className="text-4xl lg:text-7xl font-display font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
              Ready to <br />
              <span className="text-primary/20">Plan Your</span> Next Trip?
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Tell us what you're after and we'll come back within 24 hours with full trip options and pricing. 
              No commitment required.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-secondary p-3 rounded-xl text-accent">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase italic tracking-tight text-lg">Response within 24 hours</h4>
                  <p className="text-muted-foreground text-sm">Full trip options and pricing sent directly to you.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary p-3 rounded-xl text-accent">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase italic tracking-tight text-lg">$200 deposit locks your spot</h4>
                  <p className="text-muted-foreground text-sm">Non-refundable. Protects your group's allocation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary p-3 rounded-xl text-accent">
                  <Shirt className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase italic tracking-tight text-lg">Everything included</h4>
                  <p className="text-muted-foreground text-sm">Polos, prizes, stubby holders, beer on arrival.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary p-3 rounded-xl text-accent">
                  <ListChecks className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase italic tracking-tight text-lg">You do nothing</h4>
                  <p className="text-muted-foreground text-sm">We manage all registrations, payments and logistics.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/30 p-10 rounded-[2.5rem] border border-secondary"
          >
            <h3 className="text-3xl font-display font-black uppercase italic mb-8 tracking-tight">Plan My Trip</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white h-12 rounded-xl border-none shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Mobile</label>
                  <Input placeholder="0400 000 000" className="bg-white h-12 rounded-xl border-none shadow-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-white h-12 rounded-xl border-none shadow-sm" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Trip Type</label>
                  <Select>
                    <SelectTrigger className="bg-white h-12 rounded-xl border-none shadow-sm">
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="golf">Golf Weekend</SelectItem>
                      <SelectItem value="fishing">Fishing Trip</SelectItem>
                      <SelectItem value="bucks">Bucks Party</SelectItem>
                      <SelectItem value="custom">Custom Trip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Group Size</label>
                  <Select>
                    <SelectTrigger className="bg-white h-12 rounded-xl border-none shadow-sm">
                      <SelectValue placeholder="Select size..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4-8">4-8 blokes</SelectItem>
                      <SelectItem value="8-16">8-16 blokes</SelectItem>
                      <SelectItem value="16-24">16-24 blokes</SelectItem>
                      <SelectItem value="24+">24+ blokes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Anything Else?</label>
                <Textarea placeholder="Tell us about preferred dates, locations, or special requests..." className="bg-white rounded-xl border-none shadow-sm min-h-[120px]" />
              </div>

              <Button className="w-full h-16 bg-accent text-primary hover:bg-primary hover:text-white border-none font-black uppercase italic tracking-tight text-lg shadow-xl shadow-accent/20 transition-all duration-300">
                Send Enquiry <Send className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-widest">
                By submitting you agree to our Terms & Conditions.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
