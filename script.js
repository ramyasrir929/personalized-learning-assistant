const form = document.getElementById('student-form');
const recommendationBox = document.getElementById('recommendation');

const nameSpan = document.getElementById('student-name');
const focusTopicsSpan = document.getElementById('focus-topics');
const pacingSpan = document.getElementById('pacing');
const materialsList = document.getElementById('materials-list');

const subjectData = {
  math: {
    low: {
      topics: ['Fractions', 'Basic Algebra', 'Problem Solving'],
      materials: ['Khan Academy - Basics', 'IXL - Intro Algebra', 'Math Games for Kids']
    },
    medium: {
      topics: ['Equations', 'Geometry Basics', 'Word Problems'],
      materials: ['Khan Academy - Intermediate', 'EdX Math Prep']
    },
    high: {
      topics: ['Advanced Algebra', 'Trigonometry', 'Math Challenges'],
      materials: ['Brilliant.org', 'MIT OpenCourseWare - Math']
    }
  },
  science: {
    low: {
      topics: ['Scientific Method', 'Basic Biology'],
      materials: ['CrashCourse - Biology', 'Khan Academy - Intro Science']
    },
    medium: {
      topics: ['Physics Concepts', 'Chemistry Basics'],
      materials: ['Coursera - General Science', 'YouTube - Science with Tyler DeWitt']
    },
    high: {
      topics: ['Organic Chemistry', 'Advanced Physics'],
      materials: ['MIT OCW - Physics', 'Brilliant.org - Science']
    }
  },
  history: {
    low: {
      topics: ['Ancient Civilizations', 'Timelines'],
      materials: ['History for Kids', 'Khan Academy - Intro History']
    },
    medium: {
      topics: ['World Wars', 'Historical Impact'],
      materials: ['CrashCourse - History', 'BBC Bitesize - History']
    },
    high: {
      topics: ['Modern History', 'Political Theories'],
      materials: ['Harvard Online - History', 'Documentaries - History Channel']
    }
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const subject = document.getElementById('subject').value;
  const score = parseInt(document.getElementById('score').value);

  let level;
  if (score < 50) {
    level = 'low';
  } else if (score < 80) {
    level = 'medium';
  } else {
    level = 'high';
  }

  const recommendations = subjectData[subject][level];

  // Fill UI
  nameSpan.textContent = name;
  focusTopicsSpan.textContent = recommendations.topics.join(', ');
  pacingSpan.textContent = level === 'low' ? 'Slow and steady, daily sessions' :
                           level === 'medium' ? 'Regular study, 3-4 times/week' :
                           'Self-paced, focus on mastery';

  // Materials
  materialsList.innerHTML = '';
  recommendations.materials.forEach(mat => {
    const li = document.createElement('li');
    li.textContent = mat;
    materialsList.appendChild(li);
  });

  recommendationBox.classList.remove('hidden');
});
