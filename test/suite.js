/* eslint-env mocha */

import '../src/'

import assert from 'assert'
import { plugins } from '@citation-js/core'

const apiTests = [
  {
    name: 'article journal',
    input: `RT Journal Article
SR Electronic(1)
ID 271
A1 Allan,Steven
A1 Gilbert,Paul
T1 Anger and anger expression in relation to perceptions of social rank, entrapment and depressive symptoms
JF Personality & Individual Differences
YR 2002
FD Feb
VO 32
IS 3
SP 551
OP 565
K1 Anger
K1 Self Report
K1 Status
K1 Depression (Emotion)
K1 Symptoms
K1 self-report measures
K1 anger expression
K1 social rank
K1 entrapment
K1 depressive symptoms
AB Explored the relationship between self-report measures of anger and anger expression with those of social rank (unfavorable social comparison and submissive behavior) and feelings of entrapment in a student population (197 Ss, mean age 23.4 yrs). The authors further investigated if the social rank/status of the target of one's anger affects anger experience and expression. Students were given C. D. Spielberger's (1988) State-Trait Anger Expression Inventory measure of anger and asked to complete it in 3 ways. First, in the normal way, and then 2 further times after reading 2 scenarios that involved lending an important and needed book which the lender fails to return, where the lender was either an up rank/authority figure (one's tutor) or a down rank, fellow student. It was found that self-perceptions of unfavorable rank (inferior self-perceptions and submissive behavior) and feeling trapped significantly affect anger suppression. It was also found that the rank of the target significantly affects anger expression and that people who respond angrily to criticism tend to show more down rank-anger when they are frustrated by a lower rank target and modulate their anger according to the rank of the person they are angry with. ( PsycINFO Database Record ( c) 2002 APA, all rights reserved)
NO PO: Human; Male; Female; Adulthood (18 yrs & older); FE: References; Peer Reviewed; UD: 20020227; F1: 0191-8869,32,3,551-565,2002; A1: 20020227 PB Elsevier Science, England, [URL:http:// www.elsevier.nl]
SN 0191-8869
AD Kingsway Hosp, Dept of Clinical Psychology, Derby, United Kingdom; [mailto: stev.allan@hotmail.com]
AN 2002-00282-017
LA English
CL 3120 Personality Traits & Processes
SF Print (Paper); Journal Article; Empirical Study
LK http:// bmj.com/content/vol325/issue7371/twib.shtml#325/7371/0 OL English (30)
OL English (30)`,
    data: [{
      type: 'article-journal',
      medium: 'electronic',
      id: '271',
      author: [
        { family: 'Allan', given: 'Steven' },
        { family: 'Gilbert', given: 'Paul' }
      ],
      title: 'Anger and anger expression in relation to perceptions of social rank, entrapment and depressive symptoms',
      'container-title': 'Personality & Individual Differences',
      issued: { 'date-parts': [[2002, 2]] },
      volume: '32',
      issue: '3',
      page: '551-565',
      keyword: 'Anger,Self Report,Status,Depression (Emotion),Symptoms,self-report measures,anger expression,social rank,entrapment,depressive symptoms',
      abstract: 'Explored the relationship between self-report measures of anger and anger expression with those of social rank (unfavorable social comparison and submissive behavior) and feelings of entrapment in a student population (197 Ss, mean age 23.4 yrs). The authors further investigated if the social rank/status of the target of one\'s anger affects anger experience and expression. Students were given C. D. Spielberger\'s (1988) State-Trait Anger Expression Inventory measure of anger and asked to complete it in 3 ways. First, in the normal way, and then 2 further times after reading 2 scenarios that involved lending an important and needed book which the lender fails to return, where the lender was either an up rank/authority figure (one\'s tutor) or a down rank, fellow student. It was found that self-perceptions of unfavorable rank (inferior self-perceptions and submissive behavior) and feeling trapped significantly affect anger suppression. It was also found that the rank of the target significantly affects anger expression and that people who respond angrily to criticism tend to show more down rank-anger when they are frustrated by a lower rank target and modulate their anger according to the rank of the person they are angry with. ( PsycINFO Database Record ( c) 2002 APA, all rights reserved)',
      note: 'PO: Human; Male; Female; Adulthood (18 yrs & older); FE: References; Peer Reviewed; UD: 20020227; F1: 0191-8869,32,3,551-565,2002; A1: 20020227 PB Elsevier Science, England, [URL:http:// www.elsevier.nl]',
      ISSN: '0191-8869',
      language: 'English'
    }],
    output: `RT Journal Article
SR Electronic(1)
ID 271
A1 Allan, Steven
A1 Gilbert, Paul
T1 Anger and anger expression in relation to perceptions of social rank, entrapment and depressive symptoms
JF Personality & Individual Differences
YR 2002
FD feb
VO 32
IS 3
SP 551
OP 565
K1 Anger
K1 Self Report
K1 Status
K1 Depression (Emotion)
K1 Symptoms
K1 self-report measures
K1 anger expression
K1 social rank
K1 entrapment
K1 depressive symptoms
AB Explored the relationship between self-report measures of anger and anger expression with those of social rank (unfavorable social comparison and submissive behavior) and feelings of entrapment in a student population (197 Ss, mean age 23.4 yrs). The authors further investigated if the social rank/status of the target of one's anger affects anger experience and expression. Students were given C. D. Spielberger's (1988) State-Trait Anger Expression Inventory measure of anger and asked to complete it in 3 ways. First, in the normal way, and then 2 further times after reading 2 scenarios that involved lending an important and needed book which the lender fails to return, where the lender was either an up rank/authority figure (one's tutor) or a down rank, fellow student. It was found that self-perceptions of unfavorable rank (inferior self-perceptions and submissive behavior) and feeling trapped significantly affect anger suppression. It was also found that the rank of the target significantly affects anger expression and that people who respond angrily to criticism tend to show more down rank-anger when they are frustrated by a lower rank target and modulate their anger according to the rank of the person they are angry with. ( PsycINFO Database Record ( c) 2002 APA, all rights reserved)
NO PO: Human; Male; Female; Adulthood (18 yrs & older); FE: References; Peer Reviewed; UD: 20020227; F1: 0191-8869,32,3,551-565,2002; A1: 20020227 PB Elsevier Science, England, [URL:http:// www.elsevier.nl]
SN 0191-8869
LA English
`
  },
  {
    name: 'dissertation',
    input: `RT Dissertation
SR Electronic(1)
ID 2118
A1 Catrambone, C.D.
T1 Effect of a case management intervention on symptoms of asthma in high risk children
YR 2000
SP 141
K1 Case Management Asthma -- Therapy -- In Infancy and Childhood Treatment Outcomes -- In Infancy and Childhood (Minor): Prospective Studies Comparative Studies Infant Child Adolescence Outpatients Asthma -- Symptoms
AB Statement of the problem. One approach to addressing the health care needs of patients with chronic medical problems is case management. Little is known about the effectiveness of case management in the treatment of children with asthma. Few randomized controlled studies of asthma case management have been conducted. In these studies, follow-up was limited to a one-year period. The purpose of this study was to determine the effectiveness of a one-year primary-care based asthma case management (ACM) strategy on symptoms of asthma in high risk children at 15 and 18 months post-intervention. Methods. Twenty-eight parent caregivers of children with asthma aged 1 to 15 years, who participated in the ACM intervention the year prior to the start of this study, agreed to participate. The ACM group ( n = 15) received one year of asthma case management and the usual care ( UC) group ( n = 13) received one year of routine outpatient care. Results. Child asthma symptoms, affects on parent lifestyle, and health system utilization were assessed. Based on caregiver four-week recall, the ACM group experienced fewer annual wheezing days compared to the UC group. 25.17 (36.55) versus 71.61 (80.01) that was statistically significant (p = 0.03). There were no statistically significant differences between the ACM and UC groups in the cumulative 18-month estimate of child night-time coughing and awakening, parent night-time awakening due to the child's asthma symptoms and worrying, parent change in plans and missed work, and asthma-related physician office visits, emergency department visits, and hospitalizations. Conclusion. A primary-care based asthma case management intervention was effective in reducing annual wheezing days in high-risk children with asthma when followed up to 18 months.
NO Update Code: 20011116
PB Rush University, College of Nursing
PP Oceanside, CA, USA
SN 0-599-73664-X
AN 2001107680
LA English
SF CINAHL; doctoral dissertation; research
OL English (30)`,
    data: [{
      type: 'thesis',
      medium: 'electronic',
      id: '2118',
      author: [{ family: 'Catrambone', given: 'C.D.' }],
      title: 'Effect of a case management intervention on symptoms of asthma in high risk children',
      issued: { 'date-parts': [[2000]] },
      page: '141',
      keyword: 'Case Management Asthma -- Therapy -- In Infancy and Childhood Treatment Outcomes -- In Infancy and Childhood (Minor): Prospective Studies Comparative Studies Infant Child Adolescence Outpatients Asthma -- Symptoms',
      abstract: 'Statement of the problem. One approach to addressing the health care needs of patients with chronic medical problems is case management. Little is known about the effectiveness of case management in the treatment of children with asthma. Few randomized controlled studies of asthma case management have been conducted. In these studies, follow-up was limited to a one-year period. The purpose of this study was to determine the effectiveness of a one-year primary-care based asthma case management (ACM) strategy on symptoms of asthma in high risk children at 15 and 18 months post-intervention. Methods. Twenty-eight parent caregivers of children with asthma aged 1 to 15 years, who participated in the ACM intervention the year prior to the start of this study, agreed to participate. The ACM group ( n = 15) received one year of asthma case management and the usual care ( UC) group ( n = 13) received one year of routine outpatient care. Results. Child asthma symptoms, affects on parent lifestyle, and health system utilization were assessed. Based on caregiver four-week recall, the ACM group experienced fewer annual wheezing days compared to the UC group. 25.17 (36.55) versus 71.61 (80.01) that was statistically significant (p = 0.03). There were no statistically significant differences between the ACM and UC groups in the cumulative 18-month estimate of child night-time coughing and awakening, parent night-time awakening due to the child\'s asthma symptoms and worrying, parent change in plans and missed work, and asthma-related physician office visits, emergency department visits, and hospitalizations. Conclusion. A primary-care based asthma case management intervention was effective in reducing annual wheezing days in high-risk children with asthma when followed up to 18 months.',
      note: 'Update Code: 20011116',
      publisher: 'Rush University, College of Nursing',
      'publisher-place': 'Oceanside, CA, USA',
      ISBN: '0-599-73664-X',
      language: 'English'
    }],
    output: `RT Dissertation
SR Electronic(1)
ID 2118
A1 Catrambone, C.D.
T1 Effect of a case management intervention on symptoms of asthma in high risk children
YR 2000
SP 141
K1 Case Management Asthma -- Therapy -- In Infancy and Childhood Treatment Outcomes -- In Infancy and Childhood (Minor): Prospective Studies Comparative Studies Infant Child Adolescence Outpatients Asthma -- Symptoms
AB Statement of the problem. One approach to addressing the health care needs of patients with chronic medical problems is case management. Little is known about the effectiveness of case management in the treatment of children with asthma. Few randomized controlled studies of asthma case management have been conducted. In these studies, follow-up was limited to a one-year period. The purpose of this study was to determine the effectiveness of a one-year primary-care based asthma case management (ACM) strategy on symptoms of asthma in high risk children at 15 and 18 months post-intervention. Methods. Twenty-eight parent caregivers of children with asthma aged 1 to 15 years, who participated in the ACM intervention the year prior to the start of this study, agreed to participate. The ACM group ( n = 15) received one year of asthma case management and the usual care ( UC) group ( n = 13) received one year of routine outpatient care. Results. Child asthma symptoms, affects on parent lifestyle, and health system utilization were assessed. Based on caregiver four-week recall, the ACM group experienced fewer annual wheezing days compared to the UC group. 25.17 (36.55) versus 71.61 (80.01) that was statistically significant (p = 0.03). There were no statistically significant differences between the ACM and UC groups in the cumulative 18-month estimate of child night-time coughing and awakening, parent night-time awakening due to the child's asthma symptoms and worrying, parent change in plans and missed work, and asthma-related physician office visits, emergency department visits, and hospitalizations. Conclusion. A primary-care based asthma case management intervention was effective in reducing annual wheezing days in high-risk children with asthma when followed up to 18 months.
NO Update Code: 20011116
PB Rush University, College of Nursing
PP Oceanside, CA, USA
SN 0-599-73664-X
LA English
`
  },
  {
    name: 'book',
    input: `RT Book, Whole
SR Electronic(1)
ID 391
A1 Caudill,Margaret A.
T1 Managing pain before it manages you: Revised Edition
YR 2002
SP 222
K1 Chronic Pain
K1 Coping Behavior
K1 Goals
K1 Pain Management
K1 Alternative Medicine
K1 Anxiety
K1 Communication
K1 Drug Therapy
K1 Exercise
K1 Major Depression
K1 Problem Solving
K1 Relaxation
K1 Stress
K1 pain reduction
K1 stress reduction
K1 coping
K1 depression
K1 medications
K1 relaxation techniques
K1 exercise techniques
K1 Plants Red Blue
K1 frank
AB (From the cover) Imagine finding a way to reduce the amount of time you spend in doctors' offices, and to decrease the discomfort, depression, and anxiety associated with chronic pain. This book offers a program designed to help you develop skills for coping with pain so you can enjoy a fuller life. Carefully developed over the authors's many years of working with chronic pain sufferers, this program has been proven effective. Program participants report that they have been able to tale control of their pain and cut their doctors's visits by more than 1/3. This hands-on guide provides detailed information with step-by-step techniques and activities designed to help you: (1) understand chronic pain, (2) recognize factors that increase or decrease pain, (3) reduce stress, (4) learn effective problem solving, (5) learn about medications and their effects, (6) develop relaxation and exercise techniques, (7) communicate effectively about your pain, and (8) set realistic goals. This revised edition features updated coverage of commonly used pain medications and specific disorders, current nutritional recommendations, and a new appendix on complementary alternative medicine. Also included are helpful new ideas on coping with pain flare-ups, staying active, accomplishing personal goals, and more. ( PsycINFO Database Record ( c) 2000 APA, all rights reserved)
NO New York, NY, US; The Guilford Press; xvi; PO: Human; Male; Female; FE: Index; Auxiliary Materials; TA: General Public; TB: (Abbreviated) Foreword Acknowledgments Preface to the revised edition Before you begin: How this book can help you Beginning to take control of your pain Understanding pain The mind-body connection The body-mind connection The power of the mind Adopting healthy attitudes Nutrition and pain Effective communication Effective problem solving The end of the beginning Appendix A. Common chronic pain conditions Appendix B. Complementary alternative medicine Appendix C. Working comfortably Appendix D. Bibliography Index About the author Worksheets and other materials; UD: 20020102; A1: 20020102
A2 Capen, C.T.
A2 Phillips, C.T.
PB The Guilford Press
PP New York, NY, US
SN 1572307188 (paperback)
AD Darmouth Medical School, NH, US
AN 2001-10193-000
LA English
CL 3300 Health & Mental Health Treatment & Prevention
SF Print (Paper); Authored Book; Handbook/Manual/Guide; Self-Help Guide
OL English (30)`,
    data: [{
      type: 'book',
      medium: 'electronic',
      id: '391',
      author: [{ family: 'Caudill', given: 'Margaret A.' }],
      title: 'Managing pain before it manages you: Revised Edition',
      issued: { 'date-parts': [[2002]] },
      page: '222',
      keyword: 'Chronic Pain,Coping Behavior,Goals,Pain Management,Alternative Medicine,Anxiety,Communication,Drug Therapy,Exercise,Major Depression,Problem Solving,Relaxation,Stress,pain reduction,stress reduction,coping,depression,medications,relaxation techniques,exercise techniques,Plants Red Blue,frank',
      abstract: '(From the cover) Imagine finding a way to reduce the amount of time you spend in doctors\' offices, and to decrease the discomfort, depression, and anxiety associated with chronic pain. This book offers a program designed to help you develop skills for coping with pain so you can enjoy a fuller life. Carefully developed over the authors\'s many years of working with chronic pain sufferers, this program has been proven effective. Program participants report that they have been able to tale control of their pain and cut their doctors\'s visits by more than 1/3. This hands-on guide provides detailed information with step-by-step techniques and activities designed to help you: (1) understand chronic pain, (2) recognize factors that increase or decrease pain, (3) reduce stress, (4) learn effective problem solving, (5) learn about medications and their effects, (6) develop relaxation and exercise techniques, (7) communicate effectively about your pain, and (8) set realistic goals. This revised edition features updated coverage of commonly used pain medications and specific disorders, current nutritional recommendations, and a new appendix on complementary alternative medicine. Also included are helpful new ideas on coping with pain flare-ups, staying active, accomplishing personal goals, and more. ( PsycINFO Database Record ( c) 2000 APA, all rights reserved)',
      note: 'New York, NY, US; The Guilford Press; xvi; PO: Human; Male; Female; FE: Index; Auxiliary Materials; TA: General Public; TB: (Abbreviated) Foreword Acknowledgments Preface to the revised edition Before you begin: How this book can help you Beginning to take control of your pain Understanding pain The mind-body connection The body-mind connection The power of the mind Adopting healthy attitudes Nutrition and pain Effective communication Effective problem solving The end of the beginning Appendix A. Common chronic pain conditions Appendix B. Complementary alternative medicine Appendix C. Working comfortably Appendix D. Bibliography Index About the author Worksheets and other materials; UD: 20020102; A1: 20020102',
      editor: [
        { family: 'Capen', given: 'C.T.' },
        { family: 'Phillips', given: 'C.T.' }
      ],
      publisher: 'The Guilford Press',
      'publisher-place': 'New York, NY, US',
      ISBN: '1572307188',
      language: 'English'
    }],
    output: `RT Book, Whole
SR Electronic(1)
ID 391
A1 Caudill, Margaret A.
T1 Managing pain before it manages you: Revised Edition
YR 2002
SP 222
K1 Chronic Pain
K1 Coping Behavior
K1 Goals
K1 Pain Management
K1 Alternative Medicine
K1 Anxiety
K1 Communication
K1 Drug Therapy
K1 Exercise
K1 Major Depression
K1 Problem Solving
K1 Relaxation
K1 Stress
K1 pain reduction
K1 stress reduction
K1 coping
K1 depression
K1 medications
K1 relaxation techniques
K1 exercise techniques
K1 Plants Red Blue
K1 frank
AB (From the cover) Imagine finding a way to reduce the amount of time you spend in doctors' offices, and to decrease the discomfort, depression, and anxiety associated with chronic pain. This book offers a program designed to help you develop skills for coping with pain so you can enjoy a fuller life. Carefully developed over the authors's many years of working with chronic pain sufferers, this program has been proven effective. Program participants report that they have been able to tale control of their pain and cut their doctors's visits by more than 1/3. This hands-on guide provides detailed information with step-by-step techniques and activities designed to help you: (1) understand chronic pain, (2) recognize factors that increase or decrease pain, (3) reduce stress, (4) learn effective problem solving, (5) learn about medications and their effects, (6) develop relaxation and exercise techniques, (7) communicate effectively about your pain, and (8) set realistic goals. This revised edition features updated coverage of commonly used pain medications and specific disorders, current nutritional recommendations, and a new appendix on complementary alternative medicine. Also included are helpful new ideas on coping with pain flare-ups, staying active, accomplishing personal goals, and more. ( PsycINFO Database Record ( c) 2000 APA, all rights reserved)
NO New York, NY, US; The Guilford Press; xvi; PO: Human; Male; Female; FE: Index; Auxiliary Materials; TA: General Public; TB: (Abbreviated) Foreword Acknowledgments Preface to the revised edition Before you begin: How this book can help you Beginning to take control of your pain Understanding pain The mind-body connection The body-mind connection The power of the mind Adopting healthy attitudes Nutrition and pain Effective communication Effective problem solving The end of the beginning Appendix A. Common chronic pain conditions Appendix B. Complementary alternative medicine Appendix C. Working comfortably Appendix D. Bibliography Index About the author Worksheets and other materials; UD: 20020102; A1: 20020102
A2 Capen, C.T.
A2 Phillips, C.T.
PB The Guilford Press
PP New York, NY, US
SN 1572307188
LA English
`
  },
  {
    name: 'report',
    input: `RT Report
SR Electronic(1)
ID 1682
A1 Heggernes,P.
A1 Eisestat, S.C.
A1 Kumfert, G.
A1 Pothen,A.
T1 Computational Complexity of the Minimum Degree Algorithm
YR 2001
FD Dec
VO NASA CR2001211421
SP 13
OP 13
K1 Graphs
K1 Variations
K1 Storage
K1 Linear algebraic equations
K1 Algorithms
K1 Computations
K1 Sparse matrix
K1 Mathematical sciences Algebra analysis geometry and mathematical logic (72B)
K1 Computers control and information theory Computer software (62B)
AB The Minimum Degree algorithm, one of the classical algorithms of sparse matrix computations, is widely used to order graphs to reduce the work and storage needed to solve sparse systems of linear equations. There has been extensive research involving practical implementations of this algorithm over the past two decades. However, little has been done to establish theoretical bounds on the computational complexity of these implementations. We study the Minimum Degree algorithm, and prove time complexity bounds for its widely used variants.
NO NT: ICASE Report No. 2001-42.; CI: UNITED-STATES; AG: DODXA, NASA; CA: 054882000, 410183; UD: 200212
PB Institute for Computer Applications in Science and Engineering, Hampton, VA
AV Hard copy only. Product reproduced from digital image. Order this product from NTIS by: phone at 1-800-553-NTIS (U.S. customers); (703)605-6000 (other countries); fax at (703)605-6900; and email at orders@ntis.gov. NTIS is located at 5285 Port R(TRUNCATED)
AN ADA398632XSP
LA ENGLISH
CL Engineering
OL English (30)`,
    data: [{
      type: 'report',
      medium: 'electronic',
      id: '1682',
      author: [
        { family: 'Heggernes', given: 'P.' },
        { family: 'Eisestat', given: 'S.C.' },
        { family: 'Kumfert', given: 'G.' },
        { family: 'Pothen', given: 'A.' }
      ],
      title: 'Computational Complexity of the Minimum Degree Algorithm',
      issued: { 'date-parts': [[2001, 12]] },
      volume: 'NASA CR2001211421',
      page: '13-13',
      keyword: 'Graphs,Variations,Storage,Linear algebraic equations,Algorithms,Computations,Sparse matrix,Mathematical sciences Algebra analysis geometry and mathematical logic (72B),Computers control and information theory Computer software (62B)',
      abstract: 'The Minimum Degree algorithm, one of the classical algorithms of sparse matrix computations, is widely used to order graphs to reduce the work and storage needed to solve sparse systems of linear equations. There has been extensive research involving practical implementations of this algorithm over the past two decades. However, little has been done to establish theoretical bounds on the computational complexity of these implementations. We study the Minimum Degree algorithm, and prove time complexity bounds for its widely used variants.',
      note: 'NT: ICASE Report No. 2001-42.; CI: UNITED-STATES; AG: DODXA, NASA; CA: 054882000, 410183; UD: 200212',
      publisher: 'Institute for Computer Applications in Science and Engineering, Hampton, VA',
      language: 'ENGLISH'
    }],
    output: `RT Report
SR Electronic(1)
ID 1682
A1 Heggernes, P.
A1 Eisestat, S.C.
A1 Kumfert, G.
A1 Pothen, A.
T1 Computational Complexity of the Minimum Degree Algorithm
YR 2001
FD dec
VO NASA CR2001211421
SP 13
OP 13
K1 Graphs
K1 Variations
K1 Storage
K1 Linear algebraic equations
K1 Algorithms
K1 Computations
K1 Sparse matrix
K1 Mathematical sciences Algebra analysis geometry and mathematical logic (72B)
K1 Computers control and information theory Computer software (62B)
AB The Minimum Degree algorithm, one of the classical algorithms of sparse matrix computations, is widely used to order graphs to reduce the work and storage needed to solve sparse systems of linear equations. There has been extensive research involving practical implementations of this algorithm over the past two decades. However, little has been done to establish theoretical bounds on the computational complexity of these implementations. We study the Minimum Degree algorithm, and prove time complexity bounds for its widely used variants.
NO NT: ICASE Report No. 2001-42.; CI: UNITED-STATES; AG: DODXA, NASA; CA: 054882000, 410183; UD: 200212
PB Institute for Computer Applications in Science and Engineering, Hampton, VA
LA ENGLISH
`
  },
  {
    name: 'book section',
    input: `RT Book, Section
SR Electronic(1)
ID 206
A1 Stansfeld,Stephen
A1 Fuhrer,Rebecca
T1 Depression and coronary heart disease
YR 2002
VO 1
IS 3
SP 101
OP 123
K1 Etiology
K1 Heart Disorders
K1 Major Depression
K1 Psychosocial Factors
K1 Risk Factors
K1 Anxiety
K1 Prediction
K1 coronary heart disease
K1 psychosocial risk factors
K1 Plants Red Blue
AB (From the chapter) This chapter discusses the evidence for the proposition that depression is an aetiological factor in coronary heart disease, and 2 of the possible pathways by which this might occur: 1 in which social factors predict coronary heart disease, and depression and its associated psychophysiological changes are an intervening step; and the 2nd in which social factors predict coronary heart disease and depression, but depression is not on the pathway. This is followed by a discussion of anxiety as an aetiological factor in coronary heart disease. (PsycINFO Database Record ( c) 2002 APA, all rights reserved)
NO Williston, VT, US: BMJ Books. xi, 304 pp.; PO: Human; FE: References; TA: Psychology: Professional & Research; UD: 20020306; A1: 20020306
A2 Gulford, C.T.
T2 Stress and the heart: Psychosocial pathways to coronary heart disease
PB BMJ Books
PP Williston, VT, US
SN 0727912771 (paperback)
AD U London, Queen Mary's School of Medicine & Dentistry, London, England
AN 2002-00714-006
LA English
CL 3200 Psychological & Physical Disorders
OL English (30)`,
    data: [{
      type: 'chapter',
      medium: 'electronic',
      id: '206',
      author: [
        { family: 'Stansfeld', given: 'Stephen' },
        { family: 'Fuhrer', given: 'Rebecca' }
      ],
      title: 'Depression and coronary heart disease',
      issued: { 'date-parts': [[2002]] },
      volume: '1',
      issue: '3',
      page: '101-123',
      keyword: 'Etiology,Heart Disorders,Major Depression,Psychosocial Factors,Risk Factors,Anxiety,Prediction,coronary heart disease,psychosocial risk factors,Plants Red Blue',
      abstract: '(From the chapter) This chapter discusses the evidence for the proposition that depression is an aetiological factor in coronary heart disease, and 2 of the possible pathways by which this might occur: 1 in which social factors predict coronary heart disease, and depression and its associated psychophysiological changes are an intervening step; and the 2nd in which social factors predict coronary heart disease and depression, but depression is not on the pathway. This is followed by a discussion of anxiety as an aetiological factor in coronary heart disease. (PsycINFO Database Record ( c) 2002 APA, all rights reserved)',
      note: 'Williston, VT, US: BMJ Books. xi, 304 pp.; PO: Human; FE: References; TA: Psychology: Professional & Research; UD: 20020306; A1: 20020306',
      editor: [{ family: 'Gulford', given: 'C.T.' }],
      'container-title': 'Stress and the heart: Psychosocial pathways to coronary heart disease',
      publisher: 'BMJ Books',
      'publisher-place': 'Williston, VT, US',
      ISBN: '0727912771',
      language: 'English'
    }],
    output: `RT Book, Section
SR Electronic(1)
ID 206
A1 Stansfeld, Stephen
A1 Fuhrer, Rebecca
T1 Depression and coronary heart disease
YR 2002
VO 1
IS 3
SP 101
OP 123
K1 Etiology
K1 Heart Disorders
K1 Major Depression
K1 Psychosocial Factors
K1 Risk Factors
K1 Anxiety
K1 Prediction
K1 coronary heart disease
K1 psychosocial risk factors
K1 Plants Red Blue
AB (From the chapter) This chapter discusses the evidence for the proposition that depression is an aetiological factor in coronary heart disease, and 2 of the possible pathways by which this might occur: 1 in which social factors predict coronary heart disease, and depression and its associated psychophysiological changes are an intervening step; and the 2nd in which social factors predict coronary heart disease and depression, but depression is not on the pathway. This is followed by a discussion of anxiety as an aetiological factor in coronary heart disease. (PsycINFO Database Record ( c) 2002 APA, all rights reserved)
NO Williston, VT, US: BMJ Books. xi, 304 pp.; PO: Human; FE: References; TA: Psychology: Professional & Research; UD: 20020306; A1: 20020306
A2 Gulford, C.T.
T2 Stress and the heart: Psychosocial pathways to coronary heart disease
PB BMJ Books
PP Williston, VT, US
SN 0727912771
LA English
`
  },
  {
    name: 'webpage',
    input: `RT Web Page
SR Electronic(1)
ID 352
T1 MERLIN-DASH: Design and Analysis of Straight Steel and Reinforced Concrete Girder Bridge Systems
ED http:// www.cee.umd.edu/best/Software/ merlin.html
AD University of Maryland, Department of Civil and Environmental Engineering, College Park, MD, USA
SF Web Resources Related to Technology
OL English (30)`,
    data: [{
      type: 'webpage',
      medium: 'electronic',
      id: '352',
      title: 'MERLIN-DASH: Design and Analysis of Straight Steel and Reinforced Concrete Girder Bridge Systems',
      edition: 'http:// www.cee.umd.edu/best/Software/ merlin.html'
    }],
    output: `RT Web Page
SR Electronic(1)
ID 352
T1 MERLIN-DASH: Design and Analysis of Straight Steel and Reinforced Concrete Girder Bridge Systems
ED http:// www.cee.umd.edu/best/Software/ merlin.html
`
  },
  {
    name: 'literal name',
    input: `RT Journal Article
A1 De Vlinderstichting
`,
    data: [{
      type: 'article-journal',
      author: [{ literal: 'De Vlinderstichting' }]
    }]
  },
  {
    name: 'family name',
    input: `RT Journal Article
A1 Socrates
`,
    data: [{
      type: 'article-journal',
      author: [{ family: 'Socrates' }]
    }]
  },
  {
    name: 'name suffix',
    input: `RT Journal Article
A1 Socrates, Plato, Jr.
`,
    data: [{
      type: 'article-journal',
      author: [{ family: 'Socrates', given: 'Plato', suffix: 'Jr.' }]
    }]
  },
  {
    name: 'name suffix',
    input: `RT Journal Article
A1 Socrates,, Jr.
`,
    data: [{
      type: 'article-journal',
      author: [{ family: 'Socrates', suffix: 'Jr.' }]
    }]
  },
  {
    name: 'raw date',
    input: `RT Journal Article
FD 3rd Millenium
`,
    data: [{
      type: 'article-journal',
      issued: { raw: '3rd Millenium' }
    }]
  },
  {
    name: 'year and season',
    input: `RT Journal Article
YR 2022
FD Summer
`,
    data: [{
      type: 'article-journal',
      issued: { raw: 'Summer 2022' }
    }],
    output: `RT Journal Article
FD Summer 2022
`
  },
  {
    name: 'year and month+day',
    input: `RT Journal Article
YR 2022
FD may 20
`,
    data: [{
      type: 'article-journal',
      issued: { 'date-parts': [[2022, 5, 20]] }
    }]
  },
  {
    name: 'italic text',
    input: `RT Journal Article
T1 De Nederlandse soorten van het genus 0RW1S34RfeSDcfkexd09rT2Cyphon1RW1S34RfeSDcfkexd09rT2 Paykull (Coleoptera, Helodidae)
`,
    data: [{
      type: 'article-journal',
      title: 'De Nederlandse soorten van het genus <i>Cyphon</i> Paykull (Coleoptera, Helodidae)'
    }]
  },
  {
    name: 'print medium',
    input: `RT Journal Article
SR Print(0)
`,
    data: [{
      type: 'article-journal',
      medium: 'print'
    }]
  },
  {
    name: 'Unmapped type',
    input: `RT Abstract
`,
    data: [{
      type: 'document'
    }],
    output: `RT Book, Whole
`
  }
]

describe('refworks', function () {
  describe('input', function () {
    for (const { name, input, data } of apiTests) {
      it(name, async function () {
        assert.deepStrictEqual(await plugins.input.chainAsync(input, { generateGraph: false }), data)
      })
    }
  })

  describe('output', function () {
    for (const { name, input, data, output = input } of apiTests) {
      it(name, function () {
        assert.deepStrictEqual(plugins.output.format('refworks', data), output)
      })
    }

    it('other medium', function () {
      assert.deepStrictEqual(
        plugins.output.format('refworks', [{ medium: 'dvd' }]),
        'RT Book, Whole\n'
      )
    })

    it('nocase', function () {
      assert.deepStrictEqual(
        plugins.output.format('refworks', [{ title: '<span class="nocase">Test</span>' }]),
        'RT Book, Whole\nT1 Test\n'
      )
    })
  })

  describe('object output', function () {
    for (const { name, input, data, output = input } of apiTests) {
      it(name, function () {
        const actualOutput = plugins.input.chainLink(output)
        assert.deepStrictEqual(plugins.output.format('refworks', data, { format: 'object' }), actualOutput)
      })
    }
  })
})
