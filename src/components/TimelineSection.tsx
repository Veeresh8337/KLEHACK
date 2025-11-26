import { CalendarClock, Puzzle, FileText, FlaskConical, Cpu, Presentation, Lightbulb } from "lucide-react";

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="py-28 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.06),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,250,252,0.04),_transparent_55%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-5xl md:text-6xl mb-6">
            <span className="text-foreground">Hackathon</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Understand the key dates and what happens in each round of the event.
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass rounded-2xl p-6 border border-primary/25 bg-slate-950/70 backdrop-blur-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center glow-arc">
              <CalendarClock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-semibold text-lg mb-1">Registration Last Date</h3>
              <p className="text-sm text-foreground/70">30th November &mdash; make sure your team is registered before this date.</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-accent/25 bg-slate-950/70 backdrop-blur-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center glow-gold">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-semibold text-lg mb-1">Event Start</h3>
              <p className="text-sm text-foreground/70">Hackathon kicks off from 1st December with Round 1 activities.</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-secondary/25 bg-slate-950/70 backdrop-blur-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center glow-red">
              <Presentation className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-semibold text-lg mb-1">Total Rounds</h3>
              <p className="text-sm text-foreground/70">2 intense rounds &mdash; puzzle + PPT on Day 1, prototype + pitching on Day 2.</p>
            </div>
          </div>
        </div>

        {/* Detailed Timeline */}
        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-emerald-400/30 to-transparent" />

          <div className="space-y-12">
            {/* Round 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              <div className="md:text-right flex flex-col justify-center">
                <p className="text-sm font-medium text-primary/80 mb-2 uppercase tracking-[0.22em]">
                  Day 1 &middot; Round 1
                </p>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                  Puzzle, Problem Statement &amp; PPT
                </h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Start by solving a curated puzzle challenge. Once you crack it, your team unlocks the official
                  problem statement. Use this to prepare a clear and impactful PPT that explains your idea,
                  solution approach, and tech stack.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-8 border border-primary/25 bg-slate-950/80 backdrop-blur-2xl flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center glow-arc">
                    <Puzzle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Solve the Puzzle</h4>
                    <p className="text-sm text-foreground/70">Kickoff with a brain-teasing puzzle that leads you to the main challenge.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center glow-arc">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Unlock Problem Statement</h4>
                    <p className="text-sm text-foreground/70">Once solved, your team receives the official problem statement to work on.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center glow-arc">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Prepare the PPT</h4>
                    <p className="text-sm text-foreground/70">Design your presentation that you will use to pitch in the next round.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch md:pt-4">
              <div className="order-2 md:order-1 glass-strong rounded-2xl p-8 border border-secondary/25 bg-slate-950/80 backdrop-blur-2xl flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center glow-red">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Surprise Round Elements</h4>
                    <p className="text-sm text-foreground/70">Expect surprise constraints or twists that test how adaptive your team is.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-red">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Prototype Building</h4>
                    <p className="text-sm text-foreground/70">Convert your idea and PPT into a working prototype that showcases your solution.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-gold">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">Pitch to Judges</h4>
                    <p className="text-sm text-foreground/70">
                      Present your prototype and use the PPT you created on Day 1 to pitch your solution to the judges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 md:text-left flex flex-col justify-center">
                <p className="text-sm font-medium text-secondary/80 mb-2 uppercase tracking-[0.22em]">
                  Day 2 &middot; Round 2
                </p>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                  Surprise, Prototype &amp; Final Pitch
                </h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  The second round is where your idea becomes real. Face surprise twists, rapidly prototype your
                  solution, and finally present it to the judges using the PPT prepared on the previous day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
