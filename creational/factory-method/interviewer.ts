interface Interviewer {
  askQuestions: () => void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('Asking about design patterns');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('Asking about community building');
  }
}

abstract class HiringManager {
  // Factory method
  abstract makeInterviewer(): Interviewer;

  takeInterview(): void {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
